"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Briefcase, MapPinned, Send, Menu, X, ShieldCheck, Building2, Images, Phone, CircleHelp } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/jobs", label: "Jobs", Icon: Briefcase },
  { href: "/destinations", label: "Destinations", Icon: MapPinned },
  { href: "/#apply", label: "Apply", Icon: Send },
];

const more = [
  ["/how-it-works", "How it works", ShieldCheck],
  ["/for-employers", "Employers", Building2],
  ["/gallery", "Gallery", Images],
  ["/faqs", "FAQs", CircleHelp],
  ["/contact", "Contact", Phone],
] as const;

export function MobileTabBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[80] bg-slate-950/45 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-x-3 bottom-24 rounded-3xl bg-white p-4 shadow-lift" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between px-2">
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4aa2]">Explore MK Connection</p><p className="mt-1 text-sm text-slate-500">Everything is available here — no account needed.</p></div>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-[#0b4aa2]"><X size={18} /></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {more.map(([href, label, Icon]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-blue-100 px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50">
                  <Icon size={18} className="text-[#0b4aa2]" /> {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav aria-label="Mobile quick navigation" className="fixed inset-x-3 bottom-3 z-[90] lg:hidden">
        <ul className="flex items-end justify-around rounded-[28px] bg-[#073b82] px-1.5 pb-2 pt-3 shadow-lift">
          {tabs.map(({ href, label, Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);
            return (
              <li key={href} className="flex-1">
                <Link href={href} className="flex flex-col items-center gap-1 text-[10px]" onClick={() => setOpen(false)}>
                  <span className={`grid place-items-center rounded-full transition-all duration-300 ${active ? "-mt-8 h-12 w-12 border-[5px] border-white bg-[#0b4aa2] text-white" : "h-8 w-8 text-white/70"}`}>
                    <Icon size={active ? 20 : 18} />
                  </span>
                  <span className={active ? "font-bold text-white" : "text-white/70"}>{label}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex-1">
            <button onClick={() => setOpen((v) => !v)} className="flex w-full flex-col items-center gap-1 text-[10px]">
              <span className={`grid h-8 w-8 place-items-center rounded-full ${open ? "bg-white text-[#0b4aa2]" : "text-white/70"}`}><Menu size={18} /></span>
              <span className={open ? "font-bold text-white" : "text-white/70"}>More</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
