import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import getAllJobs from "../api/jobServices";
import toast from "react-hot-toast";

export default function Tab() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(res.data || []);
      console.log(res.data);
      
    } catch (err) {
      console.error("fetchJobs error:", err);
      toast.error("Failed to load jobs");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      setTyping(false);
      return;
    }
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 300);
    return () => clearTimeout(t);
  }, [query]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? jobs.filter((job) => {
        const title = String(job.title || job.role || "").toLowerCase();
        const company = String(job.company || job.employer || "").toLowerCase();
        const location = String(job.location || job.city || "").toLowerCase();
        return title.includes(q) || company.includes(q) || location.includes(q);
      })
    : jobs;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Latest Job Listings
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            New opportunities added regularly — search and apply instantly.
          </p>
        </div>

        <div className="w-full md:w-96">
          <div className="relative">
            <svg
              className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, company or location..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300 outline-none"
            />
          </div>
          <div className="mt-2 text-xs text-slate-500">
            {typing ? "Searching..." : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white border rounded-2xl p-5 h-44" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-12 text-center py-12">
            <div className="text-lg font-semibold text-slate-700 mb-2">No jobs found</div>
            <div className="text-sm text-slate-500">Try a different keyword or clear the search.</div>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((job) => (
              <JobCard key={job._id || job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
