import { Suspense } from "react";
import { JobsListing } from "@/components/JobsListing";

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="container-content py-20 text-sm text-slate">Loading jobs...</div>}>
      <JobsListing />
    </Suspense>
  );
}
