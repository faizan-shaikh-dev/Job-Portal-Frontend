import React, { useEffect, useState } from "react";
import { useFeedback } from "../context/FeedbackContext";

export default function Testimonials() {
  const { feedbackList, loadFeedback, loading } = useFeedback();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    loadFeedback();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!feedbackList.length) return null;

  const feedback = feedbackList[index];

  return (
    <section className="py-12">
      <div className="max-w-xl mx-auto text-center">

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="font-semibold">{feedback.name}</div>
          <div className="text-xs text-gray-500">{feedback.role}</div>
          <p className="mt-3">{feedback.message}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() =>
            setIndex(i => i === 0 ? feedbackList.length - 1 : i - 1)
          }>
            Prev
          </button>

          <button onClick={() =>
            setIndex(i => i === feedbackList.length - 1 ? 0 : i + 1)
          }>
            Next
          </button>
        </div>

      </div>
    </section>
  );
}
