import React from 'react';
import * as C from './style';

export default function Card({item}){
    return(
        <C.Container style={{backgroundImage: `url(${item.IdentificacaoParlamentar.UrlFotoParlamentar})`}}>
            <div className='senator-field'>
                <div className='senator-about'>
                    <p className='senator-name'>{item.IdentificacaoParlamentar.NomeParlamentar}</p>
                    <p>{item.IdentificacaoParlamentar.UfParlamentar}</p>
                    <p>{item.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                    <button>
                        <p>Detalhes</p>
                    </button>
                </div>
            </div>
        </C.Container>
    )
}