import React from 'react';
import * as C from './style';

export default function SenatorCommission({item}){
    return(
        <C.Container>
            <div className='cod--commission'>
                <p>Código da comissão: {item.IdentificacaoComissao.CodigoComissao}</p>
            </div>
            <div className='commission'>
                <p>Comissão: {item.IdentificacaoComissao.NomeComissao}</p>
            </div>
            <div className='commission--date'>
                <div>
                    <p>Inicio da comissão: {item.DataInicio}</p>
                </div>
                <div>
                    <p>Fim da comissão: {item.DataFim}</p>
                </div>
            </div>
        </C.Container>
    )
}