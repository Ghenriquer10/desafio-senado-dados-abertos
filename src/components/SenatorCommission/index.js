import React from 'react';
import * as C from './style';

export default function SenatorCommission({item}){
    return(
        <C.Container>
            <div className='cod--commission'>
                <p>Código da comissão: {item.IdentificacaoComissao.CodigoComissao}</p>
            </div>
            <div className='commission'>
                <p>Nome: {item.IdentificacaoComissao.NomeComissao}</p>
            </div>
            <div className='commission--date'>
                <div>
                    <p>Inicio da comissão: {item.DataInicio.replace(/-/gi, "/")}</p>
                </div>
                <div>
                    {item.DataFim === undefined ? (
                        <p>Fim da comissão: Em aberto</p>
                    ): (
                        <p>Fim da comissão: {item.DataFim.replace(/-/gi, "/")}</p>
                    )}
                </div>
            </div>
        </C.Container>
    )
}