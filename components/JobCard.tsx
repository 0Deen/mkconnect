"use client";

import Link from "next/link";
import { BadgeCheck, MapPin } from "lucide-react";
import { Job } from "@/data/jobs";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function JobCard({ job }: { job: Job }) {
  const { t } = useLanguage();

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 transition hover:border-amber hover:shadow-soft">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg text-ink">{job.title}</h3>
            <p className="text-sm text-slate">{job.employer}</p>
          </div>
          {job.verified && (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber/10 px-2.5 py-1 text-[11px] font-medium text-amber-deep">
              <BadgeCheck size={13} /> Verified
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm text-slate">
          <MapPin size={14} />
          {job.city}, {job.country}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate">
          <span>{job.salary}</span>
          <span>{job.contract}</span>
          <span>{job.experience}</span>
          <span>{job.posted}</span>
        </div>
      </div>

      <Link
        href={`/jobs/${job.slug}`}
        className="mt-6 inline-block rounded-full border border-ink px-4 py-2.5 text-center text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
      >
        {t("featured.view")}
      </Link>
    </div>
  );
}
