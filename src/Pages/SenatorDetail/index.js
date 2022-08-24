import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles'
import {Link, useParams} from 'react-router-dom';
import senatorApi from '../../services/senatorApi';
import { contextData } from '../../contexts/contextData';
import SenatorCommission from '../../components/SenatorCommission';
import commissionApi from '../../services/commissionApi';

export default function SenatorDetail(){

    const { id } = useParams()
    const [senator, setSenator]=useState({})
    const [commission, setCommission]=useState({})
    const [loading, setLoading]=useState(true) 

    const {handleState} = useContext(contextData)

    useEffect(() => {
        async function loadSenator(){
            const response = await senatorApi.get(`/${id}.json`)
            setSenator(response.data.DetalheParlamentar.Parlamentar)
            setLoading(false)
        }
        loadSenator()
    } ,[id])

    useEffect(() => {
        async function loadCommissions(){
            const response = await commissionApi.get(`/${id}/comissoes.json`)
            console.log(response.data.MembroComissaoParlamentar.Parlamentar.MembroComissoes.Comissao)
            setCommission(response.data.MembroComissaoParlamentar.Parlamentar.MembroComissoes.Comissao)
        }

        loadCommissions()
    }, [id])

    return(
        <C.Container>
            <div className='title'>
                <p>Senador</p>
                <Link className='button-back' to={'/'}>Voltar</Link>
            </div>

            {loading ? (
                <h1>Carregando</h1>
            ): (
                <C.SenatorAbout>
                    <div className='senator-about'>
                        <div className='senator-photo'>
                            <img src={senator.IdentificacaoParlamentar.UrlFotoParlamentar} alt={'Foto do senador pesquisado.'}/>
                        </div>
                        <div className='senator-data'>
                            <div>
                                <p className='senator-name'>{senator.IdentificacaoParlamentar.NomeParlamentar} - {senator.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                            </div>
                            <div>
                                <p>Estado: {senator.IdentificacaoParlamentar.UfParlamentar} - {handleState(senator.IdentificacaoParlamentar.UfParlamentar)} </p>
                                <p>Partido: {senator.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                                <p>Nascimento: {senator.DadosBasicosParlamentar.DataNascimento.replace(/-/gi, "/")}</p>
                            </div>
                        </div>
                    </div>
                </C.SenatorAbout>
            )}
            <p>Comissões</p>
            <C.Commission>
            {commission ? (
                   Object.values(commission).map((item, index) => {
                        return(
                            <SenatorCommission
                                key={index}
                                item={item}
                            />
                        )
                    })

            ): (<h1>Não foi possível carregar as comissões dos senadores</h1>)}
            </C.Commission>
        </C.Container>
    )
}