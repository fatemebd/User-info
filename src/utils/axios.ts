import axios from "axios"

const generateAxiosInstance=()=>{
    const instance =axios.create({baseURL:import.meta.env.VITE_BASE_URL,headers:{Accept:"application/json","Content-Type":"application/json"}})
    return {instance}
}

export const axiosInstance = generateAxiosInstance().instance