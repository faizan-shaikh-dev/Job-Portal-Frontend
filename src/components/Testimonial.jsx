// src/components/Testimonials.jsx
import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#f7fffb,#ffffff)] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h3 className="text-2xl font-extrabold text-emerald-800 text-center">What people say</h3>
        <p className="text-sm text-slate-600 text-center mt-2 max-w-2xl mx-auto">
          Real feedback from candidates who found jobs through ApplyRemote.
        </p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow border border-emerald-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 grid place-items-center text-emerald-700 font-bold">AS</div>
              <div>
                <div className="font-semibold text-emerald-700">Anita S.</div>
                <div className="text-xs text-slate-500">Frontend engineer</div>
              </div>
            </div>
            <p className="mt-4 text-slate-600 text-sm">
              Found a remote role in two weeks. The application flow was clear and the company was genuine.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow border border-emerald-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 grid place-items-center text-emerald-700 font-bold">RK</div>
              <div>
                <div className="font-semibold text-emerald-700">Rahul K.</div>
                <div className="text-xs text-slate-500">Backend engineer</div>
              </div>
            </div>
            <p className="mt-4 text-slate-600 text-sm">
              Jobs were high quality and communication with employers was professional. Recommended.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-6 shadow border border-emerald-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 grid place-items-center text-emerald-700 font-bold">LP</div>
              <div>
                <div className="font-semibold text-emerald-700">Lisa P.</div>
                <div className="text-xs text-slate-500">Product Designer</div>
              </div>
            </div>
            <p className="mt-4 text-slate-600 text-sm">
              The platform is simple and the selection process saved me time — great for designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
