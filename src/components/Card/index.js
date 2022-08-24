import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextData } from '../../contexts/contextData';
import * as C from './style';

export default function Card({item}){

    const {handleState} = useContext(contextData)

    return(
        <C.Container style={{backgroundImage: `url(${item.IdentificacaoParlamentar.UrlFotoParlamentar})`}}>
            <div className='senator-field'>
                <div className='senator-about'>
                    <p className='senator-name'>{item.IdentificacaoParlamentar.NomeParlamentar}</p>
                    <p>{item.IdentificacaoParlamentar.UfParlamentar} - {handleState(item.IdentificacaoParlamentar.UfParlamentar)}</p>
                    <p>{item.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                    <Link className='button' to={`/senator/${item.IdentificacaoParlamentar.CodigoParlamentar}`}>
                        <p>Detalhes</p>
                    </Link>
                </div>
            </div>
        </C.Container>
    )
}