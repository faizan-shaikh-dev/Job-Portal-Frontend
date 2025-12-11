import axiosClient from "./axiosClient";

//Get All Jobs API
export const getAllJobs = () => {
  return axiosClient.get("/api/jobs/all");
};

//Post New Jobs API
export const postJob = (payload) => {
  return axiosClient.post("/api/jobs/create", payload);
};

//Delete Jobs API
export const deleteJobs = (id) => {
  return axiosClient.delete(`/api/jobs/${id}`);
};
