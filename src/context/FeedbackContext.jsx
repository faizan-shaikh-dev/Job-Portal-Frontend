import { createContext, useContext, useState } from "react";
import { getAllFeedback, sendFeedback } from "../api/feedbackServices";
import toast from "react-hot-toast";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loadin, setLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  const createFeedback = async (payload) => {
    setLoading(true);
    try {
      const res = await sendFeedback(payload);
      toast.success("Feedback send successfully");
      return res.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit feedback");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const loadFeedback = async () => {
    setLoading(true);
    try {
      const res = await getAllFeedback();
      setFeedbackList(res.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Filed to fetch feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{ loadin, feedbackList, createFeedback, loadFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = ()=> useContext(FeedbackContext);