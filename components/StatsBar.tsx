"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function StatsBar() {
  const { t } = useLanguage();
  const stats = [
    { value: "2,300+", label: t("stats.jobs") },
    { value: "9,800+", label: t("stats.placed") },
    { value: "140+", label: t("stats.employers") },
    { value: "6", label: t("stats.countries") },
  ];

  return (
    <section className="border-y border-line bg-sand/60">
      <div className="container-content grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl text-ink md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-slate">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
