import axiosClient from "./axiosClient"

//Register API
export const registerApi = (paylaod) =>{
  return axiosClient.post('/api/users/register', paylaod)
};

//Login API
export const loginApi = (paylaod)=>{
   return axiosClient.post('/api/users/login', paylaod)
};
