import React from 'react';
import logo from '../../assets/logo.png'
import './menu.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Menu () {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="TirsoFlix - Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;