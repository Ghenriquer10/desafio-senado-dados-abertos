import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles'
import {useParams} from 'react-router-dom';
import senatorApi from '../../services/senatorApi';
import { contextData } from '../../contexts/contextData';
import SenatorCommission from '../../components/SenatorCommission';

export default function SenatorDetail(){

    const { id } = useParams()
    const [senator, setSenator]=useState({})
    const [loading, setLoading]=useState(true) 

    const {handleState} = useContext(contextData)

    useEffect(() => {
        async function loadSenator(){
            const response = await senatorApi.get(`/${id}.json`)
            console.log(response.data.DetalheParlamentar.Parlamentar)
            setSenator(response.data.DetalheParlamentar.Parlamentar)
            setLoading(false)
        }
        loadSenator()
    } ,[id])

    useEffect(() => {
        
    }, [])

    return(
        <C.Container>
            <p>Senador</p>

            {loading ? (
                <h1>Carregando</h1>
            ): (
                <C.SenatorAbout>
                    <div className='senator-about'>
                        <div className='senator-photo'>
                            <img src={senator.IdentificacaoParlamentar.UrlFotoParlamentar} alt={'Foto do senador pesquisado.'}/>
                        </div>
                        <div className='senator-data'>
                            <p>Nome: {senator.IdentificacaoParlamentar.NomeParlamentar}</p>
                            <p>Estado: {senator.IdentificacaoParlamentar.UfParlamentar} - {handleState(senator.IdentificacaoParlamentar.UfParlamentar)} </p>
                            <p>Partido: {senator.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                            <p>Nascimento: {senator.DadosBasicosParlamentar.DataNascimento}</p>
                        </div>
                    </div>
                </C.SenatorAbout>
            )}

            <C.Commission>
                <SenatorCommission

                />
            </C.Commission>
        </C.Container>
    )
}