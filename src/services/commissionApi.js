import axios from "axios";

const apiBase = axios.create({
    baseURL: 'http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json'
})

export default apiBase;