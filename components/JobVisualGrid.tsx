import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  ["Caregivers", "Caregiving", "/images/jobs/caregiver.png"],
  ["Drivers", "Driving", "/images/jobs/drivers.png"],
  ["Cooks & Kitchen", "Hospitality", "/images/jobs/cheef.png"],
  ["House Maids", "Household", "/images/jobs/cleaner.png"],
  ["Security Officers", "Security", "/images/jobs/mensecurityofficers.png"],
  ["Warehouse Helpers", "Warehouse", "/images/jobs/warehosue.png"],
  ["Cleaners", "Cleaning", "/images/jobs/mencleaners.png"],
  ["General Roles", "Various", "/images/jobs/men.png"],
] as const;

export function JobVisualGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4aa2]">Opportunity categories</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#10233f] md:text-4xl">Find work that matches your skills.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">The combined project collection includes household, hospitality, driving, caregiving, security, cleaning, warehouse, construction and skilled roles.</p>
          </div>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b4aa2]">Search all jobs <ArrowRight size={17} /></Link>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {roles.map(([title, category, image]) => (
            <Link key={title} href={`/jobs?category=${encodeURIComponent(category)}`} className="group overflow-hidden rounded-2xl border border-blue-100 bg-slate-50">
              <div className="relative aspect-square overflow-hidden bg-blue-50">
                <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#0b4aa2]">{category}</p>
                <h3 className="mt-1 text-sm font-extrabold text-[#10233f]">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
