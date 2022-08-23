import React, {useState, useEffect} from 'react';
import * as C from './style';
import {FiSearch} from 'react-icons/fi'
import Card from '../../components/Card';
import apiBase from '../../services/api';

export default function Home(){

    const [inputSearch, setInputSearch] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData(){
            const response = await apiBase.get()
            setData(response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar)
            console.log(response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar)
        }

        loadData()
    }, [])

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
            <C.SenatorsContainer>
                <div className='has--senators'>                
                {data ? (
                   Object.values(data).map((item) => {
                            return(
                                <Card 
                                    key={item.IdentificacaoParlamentar.CodigoParlamentar}
                                    item={item}
                                />
                            )
                    })

                ): (<h1>Nada aqui</h1>)}

                </div>
            </C.SenatorsContainer>
        </C.Container>
    )
}