import axios from "axios";

const api = process.env.REACT_APP_BASE_SENATOR_URL

const senatorApi = axios.create({
    baseURL: api
})

export default senatorApi;