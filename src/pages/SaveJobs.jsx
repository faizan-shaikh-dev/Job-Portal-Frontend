import React from "react";
import { useSavedJobs } from "../context/SavedJobContext"; // adjust path if needed
import JobCard from "../components/JobCard";

export default function SavedJobs() {
  const { saveJobs, removeJob } = useSavedJobs();

  return (
    <section className="pt-24 pb-12 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-extrabold text-emerald-800 mb-3">Saved Jobs</h1>
      <p className="text-sm text-slate-600 mb-6">Your saved jobs will appear here.</p>

      {(!saveJobs || saveJobs.length === 0) ? (
        <div className="text-center py-20 text-slate-500 border border-dashed border-emerald-200 rounded-lg">
          No saved jobs yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {saveJobs.map((job) => (
            <div key={job._id ?? job.id ?? `${job.title}-${job.company}`}>
              <JobCard job={job} />
              <div className="mt-2 text-right">
                <button
                  onClick={() => removeJob(job)}
                  className="text-sm text-emerald-700 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
