import { createContext, useContext, useState } from "react";
import { postJob, deleteJobs } from "../api/jobServices";
import toast from "react-hot-toast";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // CREATE JOB
  const createJob = async (payload) => {
    setLoading(true);
    try {
      const res = await postJob(payload);
      toast.success("Job Posted");
      return res.data;
    } catch (error) {
      toast.error("Failed to Post Job");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // DELETE JOB
  const removeJob = async (id) => {
    if (!id) return null;

    setLoading(true);
    try {
      const res = await deleteJobs(id);
      toast.success("Job Deleted");
      return res.data;
    } catch (error) {
      toast.error("Failed to Delete Job");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ createJob, removeJob, loading }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
