import { ShieldCheck } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const StripeSecurityTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs p-4 space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span className="font-medium text-sm">Bezpieczna płatność</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Twoja płatność jest chroniona przez Stripe — lidera płatności online. Dane karty nie są
          zapisywane na naszym serwerze. Wszystkie transakcje spełniają standard PCI DSS.
        </p>
        <div className="flex items-center gap-3 pt-1">
          <svg viewBox="0 0 60 25" className="w-10 h-4" aria-label="Stripe" role="img">
            <rect width="60" height="25" rx="4" fill="#635BFF" />
            <text
              x="30"
              y="17"
              textAnchor="middle"
              fill="white"
              fontFamily="Arial, sans-serif"
              fontSize="13"
              fontWeight="700"
            >
              stripe
            </text>
          </svg>
          <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
            PCI DSS Level 1
          </span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default StripeSecurityTooltip;
