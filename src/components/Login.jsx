import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-28 bg-[linear-gradient(to_bottom,#e6f9f3,#ffffff)]">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 border border-emerald-100">
        
        <h2 className="text-2xl font-bold text-emerald-700 mb-2">Welcome back</h2>
        <p className="text-sm text-slate-500 mb-4">
          Log in to continue applying for jobs.
        </p>

        <form className="space-y-3">
          
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                         focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                         focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Your password"
            />
          </div>

          <button
            type="button"
            className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white font-semibold 
                       rounded-md hover:bg-emerald-700 transition"
          >
            Log in
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          New here?{" "}
          <span className="text-emerald-700 font-medium hover:underline cursor-pointer">
            Create an account
          </span>
        </div>

      </div>
    </div>
  );
}
