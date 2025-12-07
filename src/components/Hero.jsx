import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="pt-20 bg-[linear-gradient(to_bottom,#e6f9f3,#ffffff)] pb-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* LEFT */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 leading-tight">
            Find <span className="text-emerald-600">remote-friendly</span> jobs
            <br /> in top companies.
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl">
            Search curated remote opportunities. Apply instantly. No complexity — just opportunities.
          </p>

        
        

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link to="/remote" className="px-5 py-2 bg-white border border-emerald-300 text-emerald-700 rounded-md shadow hover:bg-emerald-50 transition">
              Browse Remote Jobs
            </Link>

            <Link to="/feedback" className="px-5 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
              Give Feedback
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl p-6 shadow-lg bg-[linear-gradient(to_bottom_right,#ffffff,#d1fae5)]">

            <div className="flex items-center justify-center h-56 rounded-xl bg-[linear-gradient(to_bottom_right,#bbf7d0,#ffffff)] overflow-hidden">
              <img src="Hero.png.png" alt="Hero UI" className="h-full object-contain" />
            </div>

            <div className="mt-6 grid grid-cols-3 text-center">
              <div>
                <p className="text-xl font-bold text-emerald-700">15k+</p>
                <p className="text-sm text-slate-500">Jobs</p>
              </div>
              <div>
                <p className="text-xl font-bold text-emerald-700">8k+</p>
                <p className="text-sm text-slate-500">Companies</p>
              </div>
              <div>
                <p className="text-xl font-bold text-emerald-700">99%</p>
                <p className="text-sm text-slate-500">Satisfaction</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
