import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-slate-700"
        >
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
              'transition-colors duration-150 appearance-none cursor-pointer',
              'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
              error && 'border-red-400 focus:ring-red-400/30 focus:border-red-500',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
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

Select.displayName = 'Select';
export default Select;
