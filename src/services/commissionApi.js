import axios from "axios";

const commissionApi = axios.create({
    baseURL: 'https://legis.senado.leg.br/dadosabertos/senador'
})

export default commissionApi;