// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src="/image.png" alt="logo" className="w-20 h-auto" />
            <div>
              <div className="text-sm font-semibold text-emerald-800">ApplyRemote</div>
              <div className="text-xs text-slate-500">Remote jobs worldwide</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 max-w-sm">
            Connect with remote-first companies, apply quickly, and get hired.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-700">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="text-slate-600 hover:text-emerald-700">Home</Link></li>
            <li><Link to="/remote" className="text-slate-600 hover:text-emerald-700">Remote Jobs</Link></li>
            <li><Link to="/hybrid" className="text-slate-600 hover:text-emerald-700">Hybrid</Link></li>
            <li><Link to="/onesite" className="text-slate-600 hover:text-emerald-700">Onsite</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-700">Contact</h4>
          <div className="mt-3 text-sm text-slate-600">
            <div>support@applyremote.example</div>
            <div className="mt-2">© {new Date().getFullYear()} ApplyRemote</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
