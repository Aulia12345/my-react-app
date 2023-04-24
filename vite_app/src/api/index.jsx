import { baseAPI } from "../config/apiService"

export const API = {
    // API products
    getProducts: () => {
        return baseAPI.get(`/products`);
    },
    createProducts: (body) => {
        return baseAPI.post(`/products`, body);
    },
    updateProducts: (id, body) => {
        return baseAPI.put(`/products/${id}`, body);
    },
    deleteProducts: (id) => {
        return baseAPI.delete(`/products/${id}`);
    }
}

