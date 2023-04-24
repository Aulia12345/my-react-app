import axios from "axios";

export const baseAPI = axios.create({
    baseURL: "https://6440f37f792fe886a89a01ab.mockapi.io/products",
})