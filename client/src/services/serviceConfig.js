import axios from "axios";

const apiUrl = import.meta.env.PROD
    ? import.meta.env.VITE_PROD_API_URL  // url of the deployed service
    : import.meta.env.VITE_DEV_API_URL   //  url of the develeopment server

console.log("apiURL:", apiUrl)

export const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true
})