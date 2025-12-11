import axiosClient from "./axiosClient"

export const getAllJobs = ()=>{
    return axiosClient.get('/api/jobs/all')
};

export const postJob = (payload)=>{
    return axiosClient.post('/api/jobs/create', payload)
};





