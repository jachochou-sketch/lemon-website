import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'success';
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: 'bg-slate-100 text-slate-700',
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent-dark',
  success: 'bg-emerald-50 text-emerald-700',
};

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
