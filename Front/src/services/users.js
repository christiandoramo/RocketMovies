import api from "./api.js";


export async function getUserById(id) {
    const response = await api.get(`/users/${id}`)
    return response.data
}
