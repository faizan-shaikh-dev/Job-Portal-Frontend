import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useSavedJobs } from "../context/SavedJobContext"; // adjust path if needed

export default function JobCard({ job }) {
  if (!job) return null;

  const {
    title,
    company,
    location,
    type,
    experience,
    salary,
    description,
    applyUrl,
    contactEmail,
    logoText,
  } = job;

  const { toggleSave, isSaved } = useSavedJobs();
  const saved = isSaved(job);

  return (
    <div className="relative bg-white border border-emerald-100 rounded-2xl shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition">
      {/* Save Icon */}
      <button
        onClick={() => toggleSave(job)}
        className="absolute top-4 right-4 text-emerald-700 hover:text-emerald-900 text-xl"
        title={saved ? "Remove saved job" : "Save job"}
      >
        {saved ? <BsBookmarkFill /> : <BsBookmark />}
      </button>

      {/* Top Row */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
          {logoText || (company && company[0]) || "C"}
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-600">
            {company} {company && location ? "•" : ""} {location}
          </p>

          <div className="flex gap-2 mt-2">
            {type && (
              <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                {type}
              </span>
            )}
            {experience && (
              <span className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-700 rounded-full border border-slate-200">
                {experience}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 text-sm text-slate-700">
        {experience && (
          <div>
            <span className="font-semibold">Experience:</span> {experience}
          </div>
        )}
        {salary && (
          <div>
            <span className="font-semibold">Salary:</span> {salary}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
      )}

      {/* Apply */}
      <div className="mt-3 flex items-center gap-4">
        {applyUrl ? (
          <a
            href={applyUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
          >
            Apply Now
          </a>
        ) : (
          <button className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition">
            Apply Now
          </button>
        )}

        {contactEmail && (
          <a href={`mailto:${contactEmail}`} className="text-sm text-emerald-700 hover:underline">
            {contactEmail}
          </a>
        )}
      </div>
    </div>
  );
}
