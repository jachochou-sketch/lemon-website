import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-light active:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all',
  secondary:
    'bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl transition-all',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark transition-all',
  ghost:
    'text-primary hover:bg-slate-100 active:bg-slate-200 transition-all',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm rounded-md gap-1.5',
  md: 'px-6 py-3 text-base rounded-lg gap-2',
  lg: 'px-8 py-4 text-lg rounded-lg gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  href,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
