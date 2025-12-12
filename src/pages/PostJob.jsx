import React, { useState } from "react";
import { useJob } from "../context/JobContext";
export default function PostJob() {
  const { createJob, loading } = useJob();

  const [form, setForm] = useState({
    company: "",
    title: "",
    location: "",
    jobType: "Remote",
    experience: "",
    salary: "",
    description: "",
    responsibilities: "",
    requirements: "",
    applyUrl: "",
    contactEmail: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const resetForm = () =>
    setForm({
      company: "",
      title: "",
      location: "",
      jobType: "Remote",
      experience: "",
      salary: "",
      description: "",
      responsibilities: "",
      requirements: "",
      applyUrl: "",
      contactEmail: ""
    });

  const validate = () => {
    if (!form.company.trim()) return "Company name is required";
    if (!form.title.trim()) return "Job title is required";
    if (!form.description.trim()) return "Job description is required";
    if (form.contactEmail && !/^\S+@\S+\.\S+$/.test(form.contactEmail)) return "Invalid contact email";
    if (form.applyUrl && !/^https?:\/\/\S+$/.test(form.applyUrl)) return "Apply URL must start with http/https";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      // lightweight feedback — you may replace with toast if preferred
      alert(err);
      return;
    }

    // build payload - adjust keys to match your backend schema if needed
    const payload = {
      company: form.company.trim(),
      title: form.title.trim(),
      location: form.location.trim(),
      jobType: form.jobType,
      experience: form.experience.trim(),
      salary: form.salary.trim(),
      description: form.description.trim(),
      responsibilities: form.responsibilities
        ? form.responsibilities.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      requirements: form.requirements
        ? form.requirements.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      applyUrl: form.applyUrl ? form.applyUrl.trim() : undefined,
      contactEmail: form.contactEmail ? form.contactEmail.trim() : undefined
    };

    const result = await createJob(payload);

    if (result) {
      // success - reset and optionally do more (redirect, update list)
      resetForm();
      console.log("Created job:", result);
    } else {
      // createJob shows toast on failure; you can add extra handling here if needed
      console.log("Job creation failed");
    }
  };

  return (
    <section className="pt-28 pb-12 max-w-4xl mx-auto px-4 md:px-6">
      <div className="bg-white rounded-2xl shadow p-6 border border-emerald-50">
        <h1 className="text-2xl font-extrabold text-emerald-800">Post a Job</h1>
        <p className="text-sm text-slate-600 mt-1">Create a job post and reach quality candidates.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Company name</label>
              <input
                name="company"
                value={form.company}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. Acme Ltd"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Job title</label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. Frontend Engineer"
                type="text"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Location</label>
              <input
                name="location"
                value={form.location}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="City, country or 'Remote'"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Job type</label>
              <select
                name="jobType"
                value={form.jobType}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 bg-white focus:ring-2 focus:ring-emerald-300 outline-none"
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Experience (yrs)</label>
              <input
                name="experience"
                value={form.experience}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="e.g. 2-5"
                type="text"
              />
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="text-sm font-medium text-slate-700">Salary (optional)</label>
            <input
              name="salary"
              value={form.salary}
              onChange={onChange}
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="e.g. ₹30,000 - ₹60,000"
              type="text"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="text-sm font-medium text-slate-700">Job description</label>
            <textarea
              name="description"
              rows={6}
              value={form.description}
              onChange={onChange}
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Describe role, expectations, responsibilities..."
            />
          </div>

          {/* Responsibilities + Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Responsibilities</label>
              <input
                name="responsibilities"
                value={form.responsibilities}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="Comma-separated list"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Requirements</label>
              <input
                name="requirements"
                value={form.requirements}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="Comma-separated list"
                type="text"
              />
            </div>
          </div>

          {/* Apply URL + Contact Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Apply URL (optional)</label>
              <input
                name="applyUrl"
                value={form.applyUrl}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="https://apply.example"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Contact email (optional)</label>
              <input
                name="contactEmail"
                value={form.contactEmail}
                onChange={onChange}
                className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
                placeholder="recruiter@example.com"
                type="email"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 text-white font-semibold rounded-md shadow transition ${
                loading ? "bg-emerald-300 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {loading ? "Posting..." : "Post Job"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border rounded-md text-slate-700 hover:bg-gray-50 transition"
            >
              Reset
            </button>

            <div className="text-sm text-slate-500 ml-auto">Tip: Add either Apply URL or a contact email.</div>
          </div>
        </form>
      </div>
    </section>
  );
}
