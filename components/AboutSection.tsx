"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const PILLAR_ICONS = [
  /* flask / science */
  <svg key="science" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v7.5L6.5 16A4 4 0 0010 21h4a4 4 0 003.5-5.5L15 10.5V3M9 3h6M9 3H7m8 0h2" />
  </svg>,
  /* heart / empathy */
  <svg key="empathy" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  /* check-circle / diagnosis */
  <svg key="diagnosis" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--brand-hero-overlay)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Doctor image — slides in from the left */}
          <div
            className="relative hidden lg:block aspect-square transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <Image
              src="/doctor.png"
              alt={t.common.doctorName}
              fill
              className="object-contain rounded-2xl"
              sizes="50vw"
            />
          </div>

          {/* Mobile image */}
          <div
            className="lg:hidden transition-all duration-700 ease-out relative z-10"
            style={{
              height: '50vh',
              marginBottom: '-2.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/doctor.png"
                alt={t.common.doctorName}
                fill
                className="object-contain object-bottom rounded-2xl"
              />
            </div>
          </div>

          {/* Text — slides in from the right */}
          <div
            className="flex flex-col gap-6 transition-all duration-700 ease-out delay-150 relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(60px)",
            }}
          >
            <div
              className="rounded-2xl bg-white/30 border border-white/40 shadow-sm px-6 py-5 flex flex-col gap-4 text-gray-700 text-base leading-relaxed"
              style={{ backdropFilter: 'blur(3px)' }}
            >
              {/* Name & credential */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                  {t.common.doctorName}
                </h2>
                <p className="mt-1 text-brand-rose font-medium">{t.about.credentials}</p>
              </div>

              {/* Gradient divider */}
              <div className="w-16 h-1 rounded-full bg-brand-sky" />

              {/* Intro bio */}
              <p className="text-justify">{t.about.bio1}</p>

              {/* Three pillars */}
              <div>
                <p className="text-sm font-semibold text-brand-dark mb-3">{t.about.pillarsTitle}</p>
                <ul className="flex flex-col gap-2">
                  {t.about.pillars.map((pillar, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white"
                        style={{ background: 'var(--color-brand-sky)' }}
                      >
                        {PILLAR_ICONS[i]}
                      </span>
                      <span className="text-sm font-medium text-brand-dark">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing bio */}
              <p className="text-justify text-sm">{t.about.bio2}</p>

              {/* Buttons */}
              <div className="mt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href="https://wa.me/529994132339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                  style={{ background: '#25D366' }}
                >
                  <WhatsAppIcon />
                  {t.about.whatsapp}
                </a>
                <a
                  href="tel:+529994132339"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                  style={{ background: 'var(--color-brand-lavender)' }}
                >
                  <PhoneIcon />
                  {t.nav.callNow}
                </a>
                <a
                  href="https://www.doctoralia.com.mx/jackeline-castro-canto/pediatra-neurologo-pediatra/ciudad-de-mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                  style={{ background: '#00A19B' }}
                >
                  <Image src="/doctoralia.png" alt="Doctoralia" width={16} height={16} className="shrink-0 brightness-0 invert" />
                  {t.about.scheduleAppointment}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
