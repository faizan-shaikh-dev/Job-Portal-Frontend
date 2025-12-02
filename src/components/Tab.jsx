import React, { useState } from "react";
import JobCard from "./JobCard";

export default function Tab() {
  const [active, setActive] = useState("Frontend");

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {["Frontend", "Backend", "FullStack", "DevOps", "Design"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg font-semibold border transition ${
              active === tab
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow border border-emerald-200">
        <h2 className="text-xl font-bold text-emerald-700">
          {active} Development
        </h2>
        <p className="mt-2 text-slate-600">
          {active} related job roles, tools, and responsibilities will appear
          here.
        </p>
      </div>
      <JobCard />
    </div>
  );
}
