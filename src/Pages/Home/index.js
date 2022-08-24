import React, {useState, useEffect} from 'react';
import * as C from './style';
import {FiSearch} from 'react-icons/fi'
import Card from '../../components/Card';
import apiBase from '../../services/api';

export default function Home(){

    const [inputSearch, setInputSearch] = useState('')
    const [inputVisible, setInputVisible] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData(){
            const response = await apiBase.get()
            setData(response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar)
            console.log(response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar)
        }

        loadData()
    }, [])

    function hadnleSearch(){
        console.log(inputSearch)
    }

    function HandleInputVisible(){
        setInputVisible(prev => !prev)
    }

    const senatorStateFilter = 
        data.filter((data) => data.IdentificacaoParlamentar.UfParlamentar.includes(inputSearch.toUpperCase()) 
        || data.IdentificacaoParlamentar.SiglaPartidoParlamentar.includes(inputSearch.toUpperCase()) )

    return(
        <C.Container>
            <C.SearchField>
                <C.SearchAbout>
                    <p>Dados Abertos</p>
                    <div className='input-field'>
                        <input 
                            placeholder='Buscar por sigla do estado ou partido'
                            value={inputSearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                        <FiSearch size={20} className={'web-search'} onClick={hadnleSearch}/>
                        <FiSearch size={20} className={'mobile-search'} onClick={HandleInputVisible}/>
                    </div>
                </C.SearchAbout>
                {inputVisible && (
                    <C.MobileInput>
                        <input 
                            placeholder='Buscar por sigla do estado ou partido'
                            value={inputSearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                    </C.MobileInput>
                )}
                <C.PageAbout>
                    <p>Senadores</p>
                </C.PageAbout>
            </C.SearchField>
            <C.SenatorsContainer>
                <div className='has--senators'>                
                {data ? (
                   Object.values(senatorStateFilter).map((item) => {
                            return(
                                <Card 
                                    key={item.IdentificacaoParlamentar.CodigoParlamentar}
                                    item={item}
                                />
                            )
                    })

                ): (<h1>Não foi possível carregar dados dos senadores</h1>)}

                </div>
            </C.SenatorsContainer>
        </C.Container>
    )
}