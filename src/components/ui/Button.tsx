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
    'border border-accent bg-accent text-white hover:border-accent-dark hover:bg-accent-dark transition-colors',
  secondary:
    'border border-primary bg-primary text-white hover:bg-primary-light transition-colors',
  outline:
    'border border-primary/50 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white transition-colors',
  ghost:
    'text-primary hover:bg-primary/5 transition-colors',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2.5 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
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
    'inline-flex items-center justify-center font-semibold tracking-[-0.01em] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
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
