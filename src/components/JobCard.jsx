import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"; // bookmark icons

export default function JobCard() {
  return (
    <div className="relative bg-white border border-emerald-100 rounded-2xl shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition">

      {/* Save Icon */}
      <button
        className="absolute top-4 right-4 text-emerald-700 hover:text-emerald-900 text-xl"
        title="Save Job"
      >
        <BsBookmark /> 
        {/* If you want filled icon → <BsBookmarkFill /> */}
      </button>

      {/* Top Row */}
      <div className="flex items-start gap-4">
        
        {/* Company Logo */}
        <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
          T
        </div>

        {/* Job Title + Company */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-900">
            Frontend Developer
          </h2>
          <p className="text-sm text-slate-600">TechNova • Mumbai, India</p>

          {/* Badges */}
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
              Remote
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-700 rounded-full border border-slate-200">
              Frontend
            </span>
          </div>
        </div>

      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap gap-6 text-sm text-slate-700">
        <div>
          <span className="font-semibold">Experience:</span> 1–3 years
        </div>
        <div>
          <span className="font-semibold">Salary:</span> ₹4,00,000 – ₹6,00,000
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700 leading-relaxed">
        We are looking for a skilled frontend developer to build clean and responsive UI components using React, Tailwind, and modern JavaScript.
      </p>

      {/* Apply Button + Email */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
        >
          Apply Now
        </a>

        <a href="mailto:hr@technova.com" className="text-sm text-emerald-700 hover:underline">
          hr@technova.com
        </a>
      </div>

    </div>
  );
}
