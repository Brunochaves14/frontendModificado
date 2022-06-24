import React, { useState} from "react";
import PageDefault from "../../../components/PageDefault";
import png from '../../../assets/img/logo.png'
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const bcrypt = require('bcryptjs');

export const Login = ()  => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault();
        axios.get(`http://localhost:4002/usuario-email/${email}`)
        .then(resp => {
            let usuario = resp.data;
            bcrypt.compare(password, usuario.senha, (erro, result) => {
                if(result) {
                    setMensagem('Usuário Logado')
                    navigate('/');
                } else {
                    setMensagem('Senha Incorreta');
                    setPassword('');
                }
            });
            
        })
        .catch(erro => {
            setMensagem('E-mail não encontrado!')
        })
    }

    return (
        <PageDefault>
            <div style={{color: 'red', textAlign: "center"}}>{mensagem}</div>
            <div className="container-login">
                 <div className="wrap-login">
                    <form className="login-form" onSubmit={login}>
                        <span className="title">Bem-Vindo!!!</span>
                        <span className="title">
                            <img src={png} alt="" />
                        </span>

                        <div className="wrap-input">
                            <input
                             className={email !== "" ? 'has-val input' : 'input'} 
                             type="email"
                             value={email}
                             required
                             onChange={e => setEmail(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Email"></span>

                        </div>

                        <div className="wrap-input">
                            <input 
                            className={password !== "" ? 'has-val input' : 'input'}
                            type="password" 
                            value = {password}
                            required
                            onChange={e => setPassword(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Password"></span>

                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não Possui Conta?</span>

                            <Link className="txt2" to="/Registrar">Criar Conta</Link>

                        </div>

                    </form>
                </div>
            </div>

        </PageDefault>
    )
};
