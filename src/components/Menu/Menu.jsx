import React from "react";
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from "../Button/Button";
import {Link} from 'react-router-dom'

//import ButtonLink from "./components/ButtonLink/buttonLink";


function Menu() {
    return (
        <nav className="menu">
            <Link to= "/">
                <img className="logo" src={logo} alt= "Logo Estacionamento" />
            </Link>

            <Button as={Link} className="ButtonLink" to='/login'>
                Cadastrar/Login
            </Button>
        </nav>
    )

}

export default Menu;