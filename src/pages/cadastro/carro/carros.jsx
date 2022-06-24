import React, { useState} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import png from '../../../assets/img/logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Registrar() {
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [RG, setRG] = useState("")
    const [telefone, setTelefone] = useState("")
    // const [carro, setCarro] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    function enviar(e) {
        e.preventDefault();

        function adicionarUsuario() {
            return axios.post('http://localhost:4002/usuario', {
                email: email,
                senha: password
            })
        }

        function adicionarPessoa() {
            return axios.post('http://localhost:4002/pessoa', {
                Nome: nome,
                Cpf: CPF,
                Rg: RG,
                CellNumber: telefone,
                email: email
            })
        }

        Promise.all([adicionarUsuario(), adicionarPessoa()])
        .then(function (resultado) {
            navigate('/login');
        })
        .catch(function (error) {
            console.log(error[0]);
            console.log(error[1])
        })
    }

    return(
        <PageDefault>
            <div className="container-login">
                <div className="wrap-login">
                <form className="login-form" onSubmit={enviar}>
                        <span className="title">Criar Conta!</span>
                        <span className="title">
                            <img src={png} alt="Logo" />
                        </span>

                        <div className="wrap-input">
                            <input
                             className={nome !== "" ? 'has-val input' : 'input'} 
                             type="nome"
                             value={nome}
                             required
                             onChange={e => setNome(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Nome Completo"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={CPF !== "" ? 'has-val input' : 'input'} 
                             type="CPF"
                             value={CPF}
                             required
                             onChange={e => setCPF(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="CPF"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={RG !== "" ? 'has-val input' : 'input'} 
                             type="RG"
                             value={RG}
                             required
                             onChange={e => setRG(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="RG"></span>

                        </div>

                        <div className="wrap-input">
                            <input
                             className={telefone !== "" ? 'has-val input' : 'input'} 
                             type="tel"
                             value={telefone}
                             required
                             onChange={e => setTelefone(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Telefone"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                             className={email !== "" ? 'has-val input' : 'input'} 
                             type="email"
                             value={email}
                             required
                             onChange={e => setEmail(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="E-mail"></span>

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
                            <button className="login-form-btn">Criar Conta</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não Possui Conta?</span>

                            <Link className="txt2" to="/login">Acessar com Email e senha</Link>

                        </div>

                    </form>

                </div>
            </div>
        </PageDefault>
    )
}

export default Registrar;
















// import React from "react";
// import PageDefault from "../../../components/PageDefault";
// import {Link} from 'react-router-dom'

// function CadastrarCliente() {
//     return(
//         <PageDefault>
//              <h1>Página de cadastro Cliente </h1>
        
//         <Link to ='/login'>
//             Vagas
//         </Link>
//         </PageDefault>

//     )
// };

// export default CadastrarCliente;