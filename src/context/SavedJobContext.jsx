
import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "../context/authContext"; // assume this exists and returns { user }

const SavedJobContext = createContext();
const STORAGE_PREFIX = "saved-jobs-v1"; 

function _userKey(user) {
  if (!user) return "guest";
 
  return user?.uid ?? user?.id ?? user?.email ?? "guest";
}

function _storageKeyForUser(user) {
  const keyPart = _userKey(user);
  return `${STORAGE_PREFIX}:${keyPart}`;
}

export const SavedJobProvider = ({ children }) => {
  const { user } = (() => {
    try {
      return useAuth();
    } catch (e) {
     
      return { user: undefined };
    }
  })();

  
  const [saveJobs, setSaveJobs] = useState(() => {
    try {
     
      const initialUser = (typeof window !== "undefined" && window.__CURRENT_USER) || user;
      const key = _storageKeyForUser(initialUser);
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed to read saved jobs from localStorage:", err);
      return [];
    }
  });

 
  const [currentUserKey, setCurrentUserKey] = useState(() => _userKey(user));

  
  useEffect(() => {
    const newKey = _userKey(user);
    if (newKey === currentUserKey) return;

    
    try {
      const prevStorageKey = `${STORAGE_PREFIX}:${currentUserKey}`;
      localStorage.setItem(prevStorageKey, JSON.stringify(saveJobs));
    } catch (e) {
     
    }

    
    try {
      const newStorageKey = _storageKeyForUser(user);
      const raw = localStorage.getItem(newStorageKey);
      setSaveJobs(raw ? JSON.parse(raw) : []);
    } catch (err) {
      console.error("Failed to load saved jobs for new user:", err);
      setSaveJobs([]);
    }

    setCurrentUserKey(newKey);
 
  }, [user]); 

 
  useEffect(() => {
    try {
      const storageKey = `${STORAGE_PREFIX}:${currentUserKey ?? "guest"}`;
      localStorage.setItem(storageKey, JSON.stringify(saveJobs));
    } catch (err) {
      console.error("Failed to write saved jobs to localStorage:", err);
    }
  }, [saveJobs, currentUserKey]);

  const getId = (j) => j?._id ?? j?.id ?? `${j?.title ?? ""}-${j?.company ?? ""}`;

  const isSaved = (job) => {
    if (!job) return false;
    const id = getId(job);
    return saveJobs.some((j) => getId(j) === id);
  };

  const saveJob = (job) => {
    if (!job) return;
    if (isSaved(job)) return;
    setSaveJobs((s) => [job, ...s]);
  };

  const removeJob = (job) => {
    if (!job) return;
    const id = getId(job);
    setSaveJobs((s) => s.filter((j) => getId(j) !== id));
  };

  const toggleSave = (job) => {
    if (!job) return;
    if (isSaved(job)) removeJob(job);
    else saveJob(job);
  };

  return (
    <SavedJobContext.Provider
      value={{ saveJobs, isSaved, saveJob, removeJob, toggleSave, currentUserKey }}
    >
      {children}
    </SavedJobContext.Provider>
  );
};

export const useSavedJobs = () => useContext(SavedJobContext);
