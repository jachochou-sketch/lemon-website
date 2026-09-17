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
        'border border-slate-900/10 bg-white transition-[border-color,box-shadow,transform] duration-300',
        hover &&
          'hover:-translate-y-0.5 hover:border-sky-800/25 hover:shadow-[0_16px_44px_rgba(31,91,86,0.10)]',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
