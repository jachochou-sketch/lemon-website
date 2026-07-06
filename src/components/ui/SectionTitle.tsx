import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold mb-4',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            light ? 'text-white/80' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
