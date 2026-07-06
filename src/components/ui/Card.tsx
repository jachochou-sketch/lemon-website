import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-slate-200 shadow-sm',
        hover &&
          'transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-slate-300',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
