import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Willians Flix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>

    )
}

export default Menu;

//O Link cria o comportamento de SPA (Single Page Application)
//Devido a utilização do Link onde era href passa a ser to