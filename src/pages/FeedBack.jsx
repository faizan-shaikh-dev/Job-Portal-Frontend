import React, { useState } from "react";

const FeedBack = () => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-28 pb-10 bg-white">
      <div className="max-w-xl mx-auto px-4 bg-white p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
          Feedback Form
        </h2>

        <h2 className="text-sm text-slate-500 mb-6">
          Tell us about your experience
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Enter Your Name"
              className="w-full mt-2 px-4 py-2 border rounded-md outline-0 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Job Role
            </label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={change}
              placeholder="Your Job Domain"
              className="w-full mt-2 px-4 py-2 border rounded-md outline-0 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Your Feedback
            </label>
            <textarea
              type="text"
              name="message"
              value={form.message}
              rows={6}
              onChange={change}
              placeholder="write your feedback"
              className="w-full mt-2 px-4 py-2 border rounded-md outline-0 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
