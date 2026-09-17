import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600"
        >
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          className={cn(
            'w-full border border-slate-900/20 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400',
            'focus:outline-none focus:ring-2 focus:ring-sky-700/15 focus:border-primary',
            'transition-[border-color,box-shadow] duration-200 resize-vertical',
            'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
            error && 'border-red-400 focus:ring-red-400/30 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="flex items-center gap-1 text-sm text-red-600 mt-0.5">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
