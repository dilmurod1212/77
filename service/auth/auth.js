import axios from "../axios";

export const useLogin = (user) => axios.post(`/auth/login`, user);