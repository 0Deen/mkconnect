"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { jobs, categories } from "@/data/jobs";
import { siteConfig } from "@/lib/site-config";
import { JobCard } from "@/components/JobCard";
import { JobAlertForm } from "@/components/JobAlertForm";

export function JobsListing() {
  const params = useSearchParams();
  const [keyword, setKeyword] = useState(params.get("q") ?? "");
  const [country, setCountry] = useState(params.get("country") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "");

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchesKeyword = keyword
        ? (j.title + j.employer + j.category).toLowerCase().includes(keyword.toLowerCase())
        : true;
      const matchesCountry = country ? j.country === country : true;
      const matchesCategory = category ? j.category === category : true;
      return matchesKeyword && matchesCountry && matchesCategory;
    });
  }, [keyword, country, category]);

  return (
    <div className="container-content py-14 md:py-20">
      <h1 className="font-display text-3xl text-ink md:text-4xl">Find where you belong</h1>
      <p className="mt-2 max-w-lg text-sm text-slate">
        {filtered.length} opportunit{filtered.length === 1 ? "y" : "ies"} matching your search.
      </p>

      <div className="mt-8 grid gap-3 rounded-2xl border border-line bg-sand/40 p-4 md:grid-cols-4">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Title, employer or keyword"
          className="rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm outline-none focus:border-amber"
        />
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm">
          <option value="">All destinations</option>
          {siteConfig.destinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm">
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button
          onClick={() => { setKeyword(""); setCountry(""); setCategory(""); }}
          className="rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink hover:border-amber"
        >
          Clear filters
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <h2 className="font-display text-xl text-ink">No jobs found</h2>
          <p className="mt-2 max-w-sm text-sm text-slate">Try changing your destination, category or search terms.</p>
          <div className="mt-6 w-full max-w-sm rounded-2xl border border-line bg-sand/40 p-5">
            <p className="mb-3 text-sm text-ink">Or get notified when a matching job opens up:</p>
            <JobAlertForm country={country} category={category} keyword={keyword} />
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
