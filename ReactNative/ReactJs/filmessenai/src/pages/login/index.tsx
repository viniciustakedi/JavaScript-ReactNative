import React from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';


function Login() {
    return (
        <div>
            <Header description="Faça o login para acessar a coletânea" />
            <div className="centro">
                <div className="login">
                    <h1>Login</h1>

                    <div className="email">
                        <Input type="Email" name="Email" label="E-mail" />
                    </div>

                    <div className="senha">
                        <Input type="Password" name="Senha" label="Senha" />
                    </div>

                    <div className="submit">
                        <input type="submit" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;