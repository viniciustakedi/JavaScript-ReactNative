import React, { useState } from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import { useHistory } from 'react-router-dom'

function Login() {
    //Método History serve para forçar a navegaçao do usuário. O router espera receber o parâmetro history, que é o objeto que ele utilizará para o controle da transição das páginas. 
    let history = useHistory(); //Cria uma variavel history e chama o método

    const [email, setEmail] = useState(''); //Como se fosse {get; set;}
    const [senha, setSenha] = useState(''); // acessar e alterar //get set

    const login = () => { //Arrow function login
        const login = { //váriavel login para armazenar um array {}
            email: email,
            senha: senha   //Acessando e alterando (modelo) os dados como se fosse no postman
        }

        fetch('http://localhost:5000/api/conta/login', { //Fetch passando a url da API
            method: 'POST', //Como é um login o método é o Post
            body: JSON.stringify(login), //Seleciona o tipo do corpo, no caso é json (Postman: Raw/Json)
            headers: {
                'content-type': 'application/json' //Tipo do conteudo é uma aplicação Json
            }
        })
            .then(response => response.json())
            .then(dados => {
                if (dados.token != undefined) {  //Se dados token for diferente de Undefined
                    localStorage.setItem('token-filmes', dados.token) //Local storage irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista
                    history.push('/');//Push indicando que ele está empurrando o usuário para uma pagina, no caso a Home
                } else
                    alert('Email ou senha inválidos') //Alerta caso o email ou senha estejam errados
                })
                
            .catch(error => console.error(error)) // Como usando o fetch colocamos um catch caso algo de errado.
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
                            <Input type="Password" name="Senha" label="Senha" onChange={e => setSenha(e.target.value)} />
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