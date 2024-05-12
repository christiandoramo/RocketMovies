import api from "./api.js";


export async function getNotes(title) {
    const response = await api.get('/notes', { params: { title } })
    return response.data
}

export async function getNoteById(id) {
    const response = await api.get(`/notes/${id}`)
    return response.data
}
export async function noteDeleteById(id) {
    const response = await api.delete(`/notes/${id}`)
    return response.data
}



