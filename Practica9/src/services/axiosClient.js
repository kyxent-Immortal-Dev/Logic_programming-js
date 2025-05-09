import axios from "axios";
export const apiHTTPClient = axios.create({
    baseURL : "https://pokeapi.co/api/v2/pokemon"
})
