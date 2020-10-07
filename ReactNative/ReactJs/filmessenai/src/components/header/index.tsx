import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/styles/global.css';


function Header() {
    return (
        <div className="Principal">
            <div className="header">
                <nav>
                    <ul className="imagemFrase">
                        <img id="img" src={logo} alt="Logo" />
                        <h1>Conheça nossa coletânia</h1>
                    </ul>
                    <ul>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Cadastro</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;