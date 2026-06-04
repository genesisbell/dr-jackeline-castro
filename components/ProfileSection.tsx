'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfileSection() {
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
      id="profile"
      ref={sectionRef}
      className="py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-section-bg)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className="mb-16 text-center transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lavender">
            {t.profile.title}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.profile.heading}
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-brand-lavender" />
        </div>

        {/* License cards */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-700 ease-out delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <LicenseCard label={t.profile.licenseLabel} value="12277576" />
          <LicenseCard label={t.profile.specialtyLicenseLabel} value="14212539" />
          <LicenseCard label={t.profile.subSpecialtyLicenseLabel} value="15581948" />
        </div>

        {/* Education + Awards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Education */}
          <div
            className="transition-all duration-700 ease-out delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-rose mb-6">
              <GraduationIcon />
              {t.profile.educationTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {t.profile.education.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-brand-sky flex items-center justify-center">
                    <GraduationCardIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark leading-snug">{item.degree}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.institution}</p>
                    <p className="text-xs text-brand-lavender mt-1">{item.country}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div
            className="transition-all duration-700 ease-out delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-rose mb-6">
              <CertIcon />
              {t.profile.certificationsTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {t.profile.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-brand-sky flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark leading-snug">{cert}</p>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {t.profile.certificationStatus}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function LicenseCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-brand-sky">
        <IdIcon />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <p className="text-lg font-bold text-brand-dark tracking-wide">{value}</p>
      </div>
    </div>
  );
}

function IdIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0M9 14h.01M12 14h3" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg className="w-4 h-4 text-brand-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 15.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5c0-1.074.37-2.075 1.002-2.922L12 14z" />
    </svg>
  );
}

function GraduationCardIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 15.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5c0-1.074.37-2.075 1.002-2.922L12 14z" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg className="w-4 h-4 text-brand-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
