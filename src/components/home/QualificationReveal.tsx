'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function QualificationReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;

    const image = element.querySelector('img');
    let inView = false;
    const reveal = () => {
      if (inView && (!image || image.complete)) {
        element.dataset.reveal = 'visible';
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      reveal();
    }, { threshold: 0.15 });

    element.dataset.reveal = 'pending';
    observer.observe(element);
    image?.addEventListener('load', reveal);
    image?.addEventListener('error', reveal);
    const showImmediately = () => {
      if (motion.matches) {
        element.dataset.reveal = 'visible';
        observer.disconnect();
      }
    };
    motion.addEventListener('change', showImmediately);

    return () => {
      observer.disconnect();
      image?.removeEventListener('load', reveal);
      image?.removeEventListener('error', reveal);
      motion.removeEventListener('change', showImmediately);
      delete element.dataset.reveal;
    };
  }, []);

  return (
    <figure ref={ref} className="qualification-visual w-full min-w-0 max-w-[520px] justify-self-center rounded-2xl border border-white/80 bg-white/40 p-3 shadow-[0_18px_54px_-28px_rgba(31,91,86,0.25)] sm:p-4 lg:justify-self-end">
      {children}
    </figure>
  );
}
