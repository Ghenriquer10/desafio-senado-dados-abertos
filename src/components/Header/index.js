import React from 'react';
import * as C from './style';
import {HiMenu} from 'react-icons/hi';
import {MdOutlineLanguage} from 'react-icons/md';
import {MdNightlight} from 'react-icons/md'
import senadoLogo from '../../assets/logo/senado.svg'
import Switch from 'react-switch'

export default function Header(){
    return(
        <>
            <C.Container>
                <div className='menu'>
                    <button>
                        <HiMenu size={30}/><p>Menu</p>
                    </button>
                </div>
                <div className='logo'>
                    <img src={senadoLogo} alt='Logo do site com o texto Senado Federal'/>
                </div>
                <div className='acessibility'>
                    <div className='languages'>
                        <MdOutlineLanguage size={30} color='#fff'/>
                        <select>
                            <option>pt-BR</option>
                            <option>en-US</option>
                        </select>
                    </div>
                    <div className='themes'>
                        <MdNightlight size={25} color='#fff'/>
                        <Switch
                            onChange={() => {}}
                            checked={true}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={30}
                            handleDiameter={15}
                            onColor="#fff"
                            offColor='#000'
                        />
                    </div>
                </div>
            </C.Container>
        </>
    )
}