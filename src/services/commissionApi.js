import axios from "axios";

const api = process.env.REACT_APP_BASE_COMMISSION_URL

const commissionApi = axios.create({
    baseURL: api
})

export default commissionApi;