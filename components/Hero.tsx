"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2 } from "lucide-react";
import { JobSearchBar } from "./JobSearchBar";

const destinations = [
  { name: "Saudi Arabia", image: "/images/countries/saudiarabia.png" },
  { name: "United Arab Emirates", image: "/images/countries/dubaicity.png" },
  { name: "Qatar", image: "/images/countries/qatar.png" },
  { name: "Kuwait", image: "/images/countries/kuwaitcity.jfif" },
  { name: "Bahrain", image: "/images/countries/manamabahrain.png" },
  { name: "Oman", image: "/images/countries/muscatoman.png" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#073b82] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,.18),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(44,129,255,.28),transparent_32%)]" />
      <div className="container-content relative py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              <span className="h-2 w-2 rounded-full bg-cyan-300" /> Kenya → international opportunities
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 }} className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Connecting talents to <span className="text-cyan-200">international opportunities.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              MK Connection Limited helps Kenyans discover genuine overseas employment opportunities, prepare confidently, and move through recruitment with clear human support from start to finish.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><CheckCircle2 size={16} /> No login required</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><ShieldCheck size={16} /> Safety-first guidance</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><Globe2 size={16} /> 6 Gulf destinations</span>
            </div>

            <div className="mt-8 max-w-4xl">
              <JobSearchBar />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <Link href="/#apply" className="rounded-full bg-white px-5 py-3 font-bold text-[#073b82] transition hover:bg-cyan-50">Start an application</Link>
              <Link href="/for-employers" className="inline-flex items-center gap-2 font-semibold text-white/90 hover:text-white">Hire Kenyan talent <ArrowRight size={16} /></Link>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .12 }} className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/countries/dubaicity.png" alt="International opportunity destination" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062a5d]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Explore destinations</p>
                  <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">Your next opportunity can start here.</h2>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 p-2 sm:grid-cols-6">
                {destinations.map((d) => (
                  <Link key={d.name} href={`/destinations/${d.name.toLowerCase().replace(/\s+/g, "-")}`} className="group relative aspect-square overflow-hidden rounded-xl bg-white/10">
                    <Image src={d.image} alt={d.name} fill className="object-cover transition duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#073b82]/20 group-hover:bg-transparent" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
