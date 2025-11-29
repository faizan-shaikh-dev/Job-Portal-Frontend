import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-28 bg-[linear-gradient(to_bottom,#e6f9f3,#ffffff)]">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 border border-emerald-100">

        <h2 className="text-2xl font-bold text-emerald-700 mb-2">Create account</h2>
        <p className="text-sm text-slate-500 mb-4">
          Start applying to remote jobs — it’s quick and free.
        </p>

        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium text-slate-700">Full name</label>
            <input
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 
                         focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Your full name"
              type="text"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email address</label>
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
              placeholder="At least 6 characters"
            />
          </div>

          <button
            type="button"
            className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white 
                       font-semibold rounded-md hover:bg-emerald-700 transition"
          >
            Create account
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <span className="text-emerald-700 font-medium hover:underline cursor-pointer">
            Log in
          </span>
        </div>

      </div>
    </div>
  );
}
