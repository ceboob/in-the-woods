import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { s as supabase } from "./client-BI8YE9oH.js";
import { B as Button, C as Card, c as CardContent, a as CardHeader, b as CardTitle, I as Input } from "./card-Bv7qocd1.js";
import { cva } from "class-variance-authority";
import { c as cn, u as useToast } from "../entry-server.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, LogOut, Filter, RefreshCw, CreditCard } from "lucide-react";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-DZKBCLML.js";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
import "@supabase/supabase-js";
import "@radix-ui/react-slot";
import "node:stream";
import "@tanstack/react-query";
import "react-dom/server";
import "react-helmet-async";
import "react-router-dom/server.mjs";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const STATUS_OPTIONS = [
  { value: "new", label: "Nowe", color: "bg-blue-100 text-blue-800" },
  { value: "confirmed", label: "Potwierdzone", color: "bg-green-100 text-green-800" },
  { value: "cancelled", label: "Anulowane", color: "bg-red-100 text-red-800" }
];
const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [depositAmounts, setDepositAmounts] = useState({});
  const [generatingLink, setGeneratingLink] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const fetchBookings = useCallback(async () => {
    setLoading(true);
    let query = supabase.from("booking_inquiries").select("*").order("created_at", { ascending: false });
    if (filter !== "all") {
      query = query.eq("status", filter);
    }
    const { data, error } = await query;
    if (error) {
      toast({ title: "Błąd", description: error.message, variant: "destructive" });
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  }, [filter, toast]);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) navigate("/admin/login");
    });
    fetchBookings();
  }, [fetchBookings, navigate]);
  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase.from("booking_inquiries").update({ status: newStatus }).eq("id", id);
    if (error) {
      toast({ title: "Błąd", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Zaktualizowano status" });
      fetchBookings();
    }
  };
  const generatePaymentLink = async (booking) => {
    const amountStr = depositAmounts[booking.id];
    const amount = parseFloat(amountStr);
    if (!amount || amount < 1) {
      toast({ title: "Podaj kwotę zaliczki (min. 1 PLN)", variant: "destructive" });
      return;
    }
    setGeneratingLink(booking.id);
    try {
      const { data, error } = await supabase.functions.invoke("create-deposit-payment", {
        body: {
          amount: Math.round(amount * 100),
          bookingId: booking.id,
          email: booking.email,
          description: `Zaliczka za pobyt ${booking.check_in} – ${booking.check_out}`
        }
      });
      if (error) throw error;
      if (data == null ? void 0 : data.url) {
        await navigator.clipboard.writeText(data.url);
        toast({ title: "Link skopiowany do schowka!", description: data.url });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nieznany błąd";
      toast({ title: "Błąd Stripe", description: message, variant: "destructive" });
    } finally {
      setGeneratingLink(null);
    }
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };
  const statusBadge = (status) => {
    const opt = STATUS_OPTIONS.find((s) => s.value === status);
    return /* @__PURE__ */ jsx(Badge, { variant: "outline", className: (opt == null ? void 0 : opt.color) || "bg-muted", children: (opt == null ? void 0 : opt.label) || status });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Panel administracyjny | In The Woods",
        description: "Panel administracyjny In The Woods",
        noindex: true,
        canonical: "https://www.suprasl.online/admin"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxs("header", { className: "border-b bg-card px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-heading text-lg font-semibold", children: "Panel rezerwacji — In The Woods" }),
        /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: handleLogout, children: [
          /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-1" }),
          " Wyloguj"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto p-4 space-y-4", children: [
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "py-3 flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxs(Select, { value: filter, onValueChange: setFilter, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-40", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "Wszystkie" }),
              STATUS_OPTIONS.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s.value, children: s.label }, s.value))
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: fetchBookings, children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 mr-1" }),
            " Odśwież"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground ml-auto", children: [
            bookings.length,
            " zapytań"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: "Zapytania rezerwacyjne" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 border-2 border-forest border-t-transparent rounded-full animate-spin" }) }) : bookings.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center py-12 text-muted-foreground", children: "Brak zapytań" }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Data" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Gość" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Kontakt" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Termin" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Goście" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Zmień status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Zaliczka Stripe" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: bookings.map((b) => /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { className: "text-xs text-muted-foreground whitespace-nowrap", children: new Date(b.created_at).toLocaleDateString("pl-PL") }),
              /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: b.name || "—" }),
              /* @__PURE__ */ jsxs(TableCell, { className: "text-xs", children: [
                /* @__PURE__ */ jsx("div", { children: b.email }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: b.phone })
              ] }),
              /* @__PURE__ */ jsxs(TableCell, { className: "whitespace-nowrap text-sm", children: [
                b.check_in,
                " → ",
                b.check_out
              ] }),
              /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: b.guests }),
              /* @__PURE__ */ jsx(TableCell, { children: statusBadge(b.status) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(
                Select,
                {
                  value: b.status,
                  onValueChange: (val) => updateStatus(b.id, val),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-32 h-8 text-xs", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsx(SelectContent, { children: STATUS_OPTIONS.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s.value, children: s.label }, s.value)) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    placeholder: "PLN",
                    className: "w-20 h-8 text-xs",
                    min: 1,
                    value: depositAmounts[b.id] || "",
                    onChange: (e) => setDepositAmounts((prev) => ({ ...prev, [b.id]: e.target.value }))
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-8 text-xs",
                    disabled: generatingLink === b.id,
                    onClick: () => generatePaymentLink(b),
                    children: [
                      /* @__PURE__ */ jsx(CreditCard, { className: "w-3 h-3 mr-1" }),
                      generatingLink === b.id ? "…" : "Link"
                    ]
                  }
                )
              ] }) })
            ] }, b.id)) })
          ] }) }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  AdminDashboard as default
};
