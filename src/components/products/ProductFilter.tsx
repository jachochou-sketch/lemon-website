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
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={cn(
            'px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            category === activeCategory
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary hover:bg-slate-50'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
