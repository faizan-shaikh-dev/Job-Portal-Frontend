import { createContext, useContext, useState } from "react";
import { postJob } from "../api/jobServices";
import toast from "react-hot-toast";

export const JobContext = createContext();

export const JobProvider = ({children})=>{
   const [loading, setLoading] = useState(false);

   const createJob = async (payload)=>{
      setLoading(true);
      try {
        const res = await postJob(payload)
        toast.success('Job Posted');
        return res.data;
      } catch (error) {
        toast.error('Failed to Post Job');
        return null;
      }finally{
        setLoading(false);
      }
   };

   return (
    <JobContext.Provider value={{createJob, loading}}>
      {children}
    </JobContext.Provider>
   )
}

export const useJob = ()=>useContext(JobContext)