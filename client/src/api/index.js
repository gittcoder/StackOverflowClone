import axios from "axios";


const API = axios.create({baseURL:"https://localhost:3500"})

export const logIn = (authData) =>API.post("/user/login",authData);
export const signUp = (authData) =>API.post("/user/signup",authData);

export const postQuestion = (questionData) =>API.post('/question/Ask',questionData)