import axiosClient from "./axiosClient"

//Send new feedback
export const sendFeedback = (paylaod) =>{
    return axiosClient.post('/api/feedback/newfeed', paylaod);
};

//Get all feedback
export const getAllFeedback = () =>{
    return axiosClient.get('/api/feedback/getall');
}