// src/components/WhyChoose.jsx
import React from "react";

export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-emerald-50">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-800">
              Why choose <span className="text-emerald-600">ApplyRemote</span>?
            </h3>
            <p className="mt-3 text-slate-600 max-w-xl">
              We surface remote-first opportunities from trusted employers — vetted roles,
              fast applications, and real support during the hiring process.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-emerald-50 grid place-items-center text-emerald-700 font-semibold">✓</div>
                <div>
                  <h4 className="font-semibold text-emerald-700">Vetted Companies</h4>
                  <p className="text-sm text-slate-500">Only verified employers with transparent processes.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-emerald-50 grid place-items-center text-emerald-700 font-semibold">⚡</div>
                <div>
                  <h4 className="font-semibold text-emerald-700">Fast Apply</h4>
                  <p className="text-sm text-slate-500">Save profiles and apply to multiple roles quickly.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-emerald-50 grid place-items-center text-emerald-700 font-semibold">🌍</div>
                <div>
                  <h4 className="font-semibold text-emerald-700">Global Reach</h4>
                  <p className="text-sm text-slate-500">Work with companies across time zones and countries.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-emerald-50 grid place-items-center text-emerald-700 font-semibold">🔒</div>
                <div>
                  <h4 className="font-semibold text-emerald-700">Secure & Private</h4>
                  <p className="text-sm text-slate-500">We protect your data and never share without consent.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/3 md:pl-8">
            <div className="w-full h-44 rounded-xl bg-[linear-gradient(to_bottom_right,#ffffff,#d1fae5)] flex items-center justify-center shadow-inner border border-emerald-50">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emerald-700">15k+</p>
                <p className="text-sm text-slate-500">remote jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
