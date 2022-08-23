import React from 'react';
import * as C from './style';
import politico from '../../assets/logo/Presidente_Bolsonaro.png'

export default function Card(){
    return(
        <C.Container style={{backgroundImage: `url(${politico})`}}>
            <div className='senator-field'>
                <div className='senator-about'>
                    <p className='senator-name'>Jair Messias Bolsonaro</p>
                    <p>Sp - São Paulo</p>
                    <p>PL - Partido Liberal</p>
                    <button>
                        <p>Detalhes</p>
                    </button>
                </div>
            </div>
        </C.Container>
    )
}