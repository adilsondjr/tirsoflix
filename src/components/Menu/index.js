import React from 'react';
import logo from '../../assets/logo.png'
import './menu.css'
//import ButtonLink from './components/buttonLink'
import Button from '../Button'

function Menu () {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="TirsoFlix - Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;