"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Globe, Menu, X, BriefcaseBusiness, MapPinned, ShieldCheck, Building2, Phone, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const primary = [
  { href: "/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/destinations", label: "Destinations", icon: MapPinned },
  { href: "/how-it-works", label: "How it works", icon: Info },
  { href: "/safety", label: "Safety", icon: ShieldCheck },
  { href: "/for-employers", label: "For employers", icon: Building2 },
];

const more = [
  ["/about", "About us"],
  ["/gallery", "Gallery"],
  ["/success-stories", "Success stories"],
  ["/resources", "Resources"],
  ["/faqs", "FAQs"],
  ["/responsibilities", "Responsibilities"],
  ["/careers", "Careers"],
  ["/contact", "Contact"],
] as const;

export function Navbar() {
  const { setShowSwitcher } = useLanguage();
  const [open, setOpen] = useState(false);
  const [explore, setExplore] = useState(false);

  return (
    <header className="sticky top-0 z-[70] border-b border-blue-100 bg-white/95 backdrop-blur-xl">
      <div className="container-content flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="MK Connection Limited home">
          <Image src="/mk/logo-blue.jpeg" alt="MK Connection Limited" width={176} height={72} className="h-14 w-[138px] object-contain object-center sm:w-[160px]" priority />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {primary.map(({ href, label }) => (
            <Link key={href} href={href} className="rounded-full px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0b4aa2]">
              {label}
            </Link>
          ))}
          <div className="relative">
            <button onClick={() => setExplore((v) => !v)} className="flex items-center gap-1 rounded-full px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0b4aa2]">
              Explore <ChevronDown size={15} className={explore ? "rotate-180 transition" : "transition"} />
            </button>
            {explore && (
              <div className="absolute right-0 top-12 grid w-[420px] grid-cols-2 gap-1 rounded-2xl border border-blue-100 bg-white p-3 shadow-lift">
                {more.map(([href, label]) => (
                  <Link key={href} href={href} onClick={() => setExplore(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0b4aa2]">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <button onClick={() => setShowSwitcher(true)} aria-label="Change language" className="grid h-10 w-10 place-items-center rounded-full border border-blue-100 text-slate-600 hover:bg-blue-50 hover:text-[#0b4aa2]">
            <Globe size={17} />
          </button>
          <Link href="/#apply" className="rounded-full bg-[#0b4aa2] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#083b83]">
            Start an application
          </Link>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-full bg-[#0b4aa2] text-white xl:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-blue-100 bg-white px-4 pb-5 shadow-xl xl:hidden">
          <nav className="container-content grid gap-1 pt-3 sm:grid-cols-2">
            {[...primary.map((x) => [x.href, x.label] as const), ...more].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0b4aa2]">
                {label}
              </Link>
            ))}
            <button onClick={() => { setShowSwitcher(true); setOpen(false); }} className="flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-blue-50">
              <Globe size={16} /> Language
            </button>
            <Link href="/#apply" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#0b4aa2] px-5 py-3 text-center text-sm font-bold text-white sm:col-span-2">
              Start an application — no login required
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
