import { baseApi } from "../config/apiService"

export const api = {
    // API users
    getUsers: () => {
        return baseApi.get(`/users`);
    },

    getUsersById: (id) => {
        return baseApi.get(`/users/${id}`);
    },

    // API biodata
    getBiodata: () => {
        return baseApi.get(`/Biodata`);
    },
    getBiodataById: (id) => {
        return baseApi.get(`/Biodata/${id}`);
    },
    createBiodata: (body) => {
        return baseApi.post(`/Biodata`, body);
    },
    updateBiodata: (id, body) => {
        return baseApi.put(`/Biodata/${id}`, body);
    },
    deleteBiodata: (id) => {
        return baseApi.delete(`/Biodata/${id}`);
    }

}