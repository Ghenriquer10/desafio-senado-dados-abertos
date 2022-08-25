import axios from "axios";

const api = process.env.REACT_APP_BASE_URL

const apiBase = axios.create({
    baseURL: api
})

export default apiBase;