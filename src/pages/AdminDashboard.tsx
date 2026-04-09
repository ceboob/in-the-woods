import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LogOut, CreditCard, RefreshCw, Filter } from 'lucide-react';

type BookingStatus = 'new' | 'confirmed' | 'cancelled';

interface Booking {
  id: string;
  name: string | null;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  guests: number;
  message: string | null;
  status: string;
  created_at: string;
}

const STATUS_OPTIONS: { value: BookingStatus; label: string; color: string }[] = [
  { value: 'new', label: 'Nowe', color: 'bg-blue-100 text-blue-800' },
  { value: 'confirmed', label: 'Potwierdzone', color: 'bg-green-100 text-green-800' },
  { value: 'cancelled', label: 'Anulowane', color: 'bg-red-100 text-red-800' },
];

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [depositAmounts, setDepositAmounts] = useState<Record<string, string>>({});
  const [generatingLink, setGeneratingLink] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from('booking_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (filter !== 'all') {
      query = query.eq('status', filter);
    }

    const { data, error } = await query;
    if (error) {
      toast({ title: 'Błąd', description: error.message, variant: 'destructive' });
    } else {
      setBookings((data as Booking[]) || []);
    }
    setLoading(false);
  }, [filter, toast]);

  useEffect(() => {
    // Check auth
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) navigate('/admin/login');
    });
    fetchBookings();
  }, [fetchBookings, navigate]);

  const updateStatus = async (id: string, newStatus: BookingStatus) => {
    const { error } = await supabase
      .from('booking_inquiries')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast({ title: 'Błąd', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Zaktualizowano status' });
      fetchBookings();
    }
  };

  const generatePaymentLink = async (booking: Booking) => {
    const amountStr = depositAmounts[booking.id];
    const amount = parseFloat(amountStr);
    if (!amount || amount < 1) {
      toast({ title: 'Podaj kwotę zaliczki (min. 1 PLN)', variant: 'destructive' });
      return;
    }

    setGeneratingLink(booking.id);
    try {
      const { data, error } = await supabase.functions.invoke('create-deposit-payment', {
        body: {
          amount: Math.round(amount * 100),
          bookingId: booking.id,
          email: booking.email,
          description: `Zaliczka za pobyt ${booking.check_in} – ${booking.check_out}`,
        },
      });

      if (error) throw error;
      if (data?.url) {
        await navigator.clipboard.writeText(data.url);
        toast({ title: 'Link skopiowany do schowka!', description: data.url });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Nieznany błąd';
      toast({ title: 'Błąd Stripe', description: message, variant: 'destructive' });
    } finally {
      setGeneratingLink(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const statusBadge = (status: string) => {
    const opt = STATUS_OPTIONS.find((s) => s.value === status);
    return (
      <Badge variant="outline" className={opt?.color || 'bg-muted'}>
        {opt?.label || status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-4 py-3 flex items-center justify-between">
        <h1 className="font-heading text-lg font-semibold">Panel rezerwacji — In The Woods</h1>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-1" /> Wyloguj
        </Button>
      </header>

      <main className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Filters */}
        <Card>
          <CardContent className="py-3 flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie</SelectItem>
                {STATUS_OPTIONS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={fetchBookings}>
              <RefreshCw className="w-4 h-4 mr-1" /> Odśwież
            </Button>
            <span className="text-sm text-muted-foreground ml-auto">{bookings.length} zapytań</span>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Zapytania rezerwacyjne</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="w-6 h-6 border-2 border-forest border-t-transparent rounded-full animate-spin" />
              </div>
            ) : bookings.length === 0 ? (
              <p className="text-center py-12 text-muted-foreground">Brak zapytań</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Gość</TableHead>
                      <TableHead>Kontakt</TableHead>
                      <TableHead>Termin</TableHead>
                      <TableHead>Goście</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Zmień status</TableHead>
                      <TableHead>Zaliczka Stripe</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((b) => (
                      <TableRow key={b.id}>
                        <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(b.created_at).toLocaleDateString('pl-PL')}
                        </TableCell>
                        <TableCell className="font-medium">{b.name || '—'}</TableCell>
                        <TableCell className="text-xs">
                          <div>{b.email}</div>
                          <div className="text-muted-foreground">{b.phone}</div>
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm">
                          {b.check_in} → {b.check_out}
                        </TableCell>
                        <TableCell className="text-center">{b.guests}</TableCell>
                        <TableCell>{statusBadge(b.status)}</TableCell>
                        <TableCell>
                          <Select
                            value={b.status}
                            onValueChange={(val) => updateStatus(b.id, val as BookingStatus)}
                          >
                            <SelectTrigger className="w-32 h-8 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {STATUS_OPTIONS.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Input
                              type="number"
                              placeholder="PLN"
                              className="w-20 h-8 text-xs"
                              min={1}
                              value={depositAmounts[b.id] || ''}
                              onChange={(e) =>
                                setDepositAmounts((prev) => ({ ...prev, [b.id]: e.target.value }))
                              }
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 text-xs"
                              disabled={generatingLink === b.id}
                              onClick={() => generatePaymentLink(b)}
                            >
                              <CreditCard className="w-3 h-3 mr-1" />
                              {generatingLink === b.id ? '…' : 'Link'}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
