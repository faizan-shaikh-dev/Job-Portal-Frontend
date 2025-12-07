import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import getAllJobs from "../api/jobServices";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Onsite() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOnsiteJobs();
  }, []);

  const fetchOnsiteJobs = async () => {
    try {
      const res = await getAllJobs();
      const all = res.data || [];

      const onsiteJobs = all.filter(
        (job) => job.jobType?.trim().toLowerCase() === "onsite"
      );

      setJobs(onsiteJobs);
    } catch (err) {
      console.error("Onsite jobs error:", err);
      toast.error("Failed to load onsite jobs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-12 max-w-7xl mx-auto px-4">

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-emerald-800">Onsite Jobs</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Build relationships, collaborate directly, and work closely with
          high-impact teams at office locations.
        </p>

        <div className="mt-4 flex gap-3">
          <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm border border-emerald-200">
            Office Based
          </span>
          <span className="px-4 py-1 bg-white text-emerald-700 rounded-full text-sm border border-emerald-200">
            Team Collaboration
          </span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-600">Loading jobs...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 text-slate-500">No onsite jobs available.</div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link to="/" className="text-emerald-700 hover:underline">
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
