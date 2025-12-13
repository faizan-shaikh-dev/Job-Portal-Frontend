import React, { useEffect, useState } from "react";
import { useFeedback } from "../context/FeedbackContext";

export default function Testimonials() {
  const { feedbackList, loading, loadFeedback } = useFeedback();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    loadFeedback();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading feedback...</p>;
  }

  if (feedbackList.length === 0) {
    return <p className="text-center py-10">No feedback yet</p>;
  }

  const prev = () => {
    setIndex((i) =>
      i === 0 ? Math.max(feedbackList.length - 3, 0) : i - 1
    );
  };

  const next = () => {
    setIndex((i) =>
      i + 3 >= feedbackList.length ? 0 : i + 1
    );
  };

  const visibleFeedback = feedbackList.slice(index, index + 3);

  return (
    <section className="bg-[linear-gradient(to_bottom,#f7fffb,#ffffff)] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-extrabold text-emerald-800 text-center">
          What People Say
        </h3>
        <p className="text-sm text-slate-600 text-center mt-2">
          Real Feedback from real users
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {visibleFeedback.map((feedback) => (
            <div
              key={feedback._id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <div className="font-semibold text-emerald-700">
                {feedback.name}
              </div>
              <div className="text-xs text-slate-500">
                {feedback.role || "User"}
              </div>
              <p className="mt-4 text-slate-600">
                “{feedback.message}”
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        {feedbackList.length > 3 && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prev}
              className="px-4 py-2 border rounded"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="px-4 py-2 border rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
