import React, { useState } from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import {useHistory} from 'react-router-dom'

function Login() {

    let history = useHistory();

    const [email, setEmail] = useState(''); //Como se fosse {get; set;}
    const [senha, setSenha] = useState('');

    const login = () => {
        const login = {
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/conta/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(dados => {
                if (dados.token != undefined || dados.token != '' || dados.token != null){
                    localStorage.setItem('token-filmes', dados.token)
                    history.push('/');
                }else{
                    alert('Email ou senha inválidos!')
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Header description="Faça o login para acessar a coletânea" />
            <div className="centro">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={event => { 
                        event.preventDefault()
                        login()
                    }}>
                        <div className="email">
                            <Input type="Email" name="Email" label="E-mail" onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="senha">
                            <Input type="Password" name="Senha" label="Senha" onChange={e => setSenha(e.target.value)}/>
                        </div>

                        <div className="submit">
                            <Button name="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;