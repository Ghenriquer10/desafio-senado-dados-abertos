import React, { useContext } from 'react';
import * as C from './style';
import { HiMenu } from 'react-icons/hi';
import { MdNightlight } from 'react-icons/md'
import senadoLogo from '../../assets/logo/senado.svg'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

export default function Header({toggleTheme}){

    const { title } = useContext(ThemeContext)

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
                    <div className='themes'>
                        <MdNightlight size={25} color='#fff'/>
                        <Switch
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={30}
                            handleDiameter={15}
                            onColor='#fff'
                            offColor='#000'
                        />
                    </div>
                </div>
            </C.Container>
        </>
    )
}