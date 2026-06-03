'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className="mb-14 text-center transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lavender">
            {t.services.title}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.services.servicesTitle}
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-brand-lavender" />
        </div>

        {/* Services list */}
        <div
          className="mx-auto max-w-2xl transition-all duration-700 ease-out delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {t.services.services.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: 'var(--color-brand-lavender)' }}
                />
                <span className="text-sm font-medium text-brand-dark">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

