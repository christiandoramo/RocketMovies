import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";



const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { token, user } = response.data
            api.defaults.headers.common['Authorization'] = `Bearer ${token}` // colocando nos cabeçalhos http o Bearer
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
            localStorage.setItem('@rocketmovies:token', token)
            setData({ user, token })
            alert('Login with success')
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message)
            } else {
                console.error('An error occurred: ', e)
            }
        };
    }
    function signOut() {
        localStorage.removeItem('@rocketmovies:user')
        localStorage.removeItem('@rocketmovies:token')
        setData({})
        alert('Bye bye!')
    }
    async function updateProfile({ user, file }) {
        try {
            if (file) {
                const formData = new FormData()
                formData.append('avatar', file)
                const res = await api.patch('/users/avatar', formData)
                const { avatar } = res.data
                user.avatar = avatar;
            }
            await api.put('/users', user)
            alert('Profile updated with success')
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user)) //reescrevendo user no localstorage
            setData({ user, token: data.token })

        } catch (e) {
            if (e.response)
                alert(e.response.data.message)
            else
                console.error(e)
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@rocketmovies:user')
        const token = localStorage.getItem('@rocketmovies:token')
        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}` // recolocando nos cabeçalhos http o Bearer
            setData({ token, user: JSON.parse(user) })
        }
    }, [])// Array vazio, nao vai disparar o useffect nunca, a não ser quando
    //  o componente for renderizado ou seja nesse caso roda apenas uma vez

    return (
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth() {
    return useContext(AuthContext)
}
export { AuthProvider, useAuth }