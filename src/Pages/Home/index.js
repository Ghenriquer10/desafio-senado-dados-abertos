import React, {useState} from 'react';
import * as C from './style';
import {FiSearch} from 'react-icons/fi'

export default function Home(){

    const [inputSearch, setInputSearch] = useState(false)

    function setInputVisible(){
        setInputSearch(prev => !prev)
    }

    return(
        <C.Container>
            <C.SearchField>
                <C.SearchAbout>
                    <p>Dados Abertos</p>
                    <div className='input-field'>
                        <input placeholder='Buscar'/>
                        <FiSearch size={20} className={'web-search'}/>
                        <FiSearch size={20} className={'mobile-search'} onClick={setInputVisible}/>
                    </div>
                </C.SearchAbout>
                {inputSearch && (
                    <C.MobileInput>
                        <input placeholder='Buscar'/>
                    </C.MobileInput>
                )}
                <C.PageAbout>
                    <p>Senadores</p>
                </C.PageAbout>
            </C.SearchField>
        </C.Container>
    )
}