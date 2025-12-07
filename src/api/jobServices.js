import axiosClient from "./axiosClient"

const getAllJobs = ()=>{
    return axiosClient.get('/api/jobs/all')
}

export default getAllJobs;