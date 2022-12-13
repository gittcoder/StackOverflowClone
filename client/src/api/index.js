import axios from "axios";


const API = axios.create({baseURL:"https://localhost:3500"})

export const logIn = (authData) =>API.post("/user/login",authData);
export const signUp = (authData) =>API.post("/user/signup",authData);

export const postQuestion = (questionData) =>API.post('/question/Ask',questionData)
export const getAllQuestions=()=> API.get('/questions/get');

export const postAnswer=(id,noOfAnswers,answerBody,userAnswered) => API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered})

export const deleteQuestion = (id) => API.delete(`/delete/${id}`)