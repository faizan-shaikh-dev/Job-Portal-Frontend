import axiosClient from "./axiosClient"

//Register API
export const registerApi = (paylaod) =>{
   axiosClient.post('/api/users/register', paylaod)
};

//Login API
export const loginApi = (paylaod)=>{
    axiosClient.post('/api/users/login', paylaod)
};
