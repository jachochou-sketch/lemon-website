'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
}

export default function ProductFilter({
  categories,
  activeCategory,
}: ProductFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All Products') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    const query = params.toString();
    router.push(`/products${query ? `?${query}` : ''}`);
  };

  return (
    <div className="flex flex-wrap border-b border-slate-900/15">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={cn(
            '-mb-px border-b-2 px-5 py-3 text-sm font-medium transition-colors',
            category === activeCategory
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:text-primary'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
