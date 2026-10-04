"use client";

import Link from "next/link";
import { Briefcase, FileText, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function QuickStartPanel() {
  const { t } = useLanguage();

  const cards = [
    { icon: Briefcase, title: t("quickstart.jobCardTitle"), text: t("quickstart.jobCardText"), cta: t("quickstart.jobCardCta"), href: "/jobs", tone: "light" },
    { icon: FileText, title: t("quickstart.applyCardTitle"), text: t("quickstart.applyCardText"), cta: t("quickstart.applyCardCta"), href: "/#apply", tone: "dark" },
    { icon: Users, title: t("quickstart.hireCardTitle"), text: t("quickstart.hireCardText"), cta: t("quickstart.hireCardCta"), href: "/for-employers", tone: "light" },
  ];

  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="mb-8 font-display text-2xl text-ink md:text-3xl">{t("quickstart.title")}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className={`group flex flex-col justify-between rounded-2xl p-7 transition ${
              c.tone === "dark" ? "bg-ink text-white hover:bg-ink/90" : "border border-line bg-white hover:border-amber"
            }`}
          >
            <div>
              <c.icon size={22} className={c.tone === "dark" ? "text-amber" : "text-amber"} />
              <h3 className="mt-5 font-display text-xl">{c.title}</h3>
              <p className={`mt-2 text-sm ${c.tone === "dark" ? "text-white/60" : "text-slate"}`}>{c.text}</p>
            </div>
            <span className={`mt-6 text-sm font-medium ${c.tone === "dark" ? "text-amber" : "text-ink"} group-hover:underline`}>
              {c.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
