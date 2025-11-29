import React from "react";

export default function PostJob() {
  return (
    <section className="pt-28 pb-12 max-w-4xl mx-auto px-4 md:px-6">
      <div className="bg-white rounded-2xl shadow p-6 border border-emerald-50">
        <h1 className="text-2xl font-extrabold text-emerald-800">Post a Job</h1>
        <p className="text-sm text-slate-600 mt-1">
          Create a job post and reach quality candidates.
        </p>

        <form className="mt-6 space-y-4">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Company name
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. Acme Ltd"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Job title
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. Frontend Engineer"
                type="text"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="City, country or 'Remote'"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Job type
              </label>
              <select
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 bg-white 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Experience (yrs)
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. 2-5"
                type="text"
              />
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Salary (optional)
            </label>
            <input
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                         focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="e.g. ₹30,000 - ₹60,000"
              type="text"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Job description
            </label>
            <textarea
              rows={6}
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                         focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Describe role, expectations, responsibilities..."
            />
          </div>

          {/* Responsibilities + Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Responsibilities
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="Comma-separated list"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Requirements
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="Comma-separated list"
                type="text"
              />
            </div>
          </div>

          {/* Apply URL + Contact Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Apply URL (optional)
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="https://apply.example"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Contact email (optional)
              </label>
              <input
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                           focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="recruiter@example.com"
                type="email"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md 
                         shadow hover:bg-emerald-700 transition"
            >
              Post Job
            </button>

            <button
              type="button"
              className="px-4 py-2 border rounded-md text-slate-700 
                         hover:bg-gray-50 transition"
            >
              Reset
            </button>

            <div className="text-sm text-slate-500 ml-auto">
              Tip: Add either Apply URL or a contact email.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
