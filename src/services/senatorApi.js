import axios from "axios";

const senatorApi = axios.create({
    baseURL: 'https://legis.senado.leg.br/dadosabertos/senador/'
})

export default senatorApi;