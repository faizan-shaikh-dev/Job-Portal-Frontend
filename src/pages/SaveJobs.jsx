import React from "react";

export default function SavedJobs() {
  return (
    <section className="pt-24 pb-12 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-extrabold text-emerald-800 mb-3">
        Saved Jobs
      </h1>
      <p className="text-sm text-slate-600 mb-6">
        Your saved jobs will appear here. (UI only for now)
      </p>

      {/* Placeholder (No Logic Yet) */}
      <div className="text-center py-20 text-slate-500 border border-dashed border-emerald-200 rounded-lg">
        No saved jobs yet.
      </div>
    </section>
  );
}
