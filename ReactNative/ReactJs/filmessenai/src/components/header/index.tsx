import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/styles/global.css';
import { Link } from 'react-router-dom';

interface HeaderProps{
    description: string;
}

const Header:React.FC<HeaderProps> = (props) => { //Fc = Function Component
    return (
        <div className="principal">
            <div className="header">
                <div className="align">
                    <nav>
                        <Link to="/"> <img id="img" src={logo} alt="Logo" /></Link>

                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                    <h3>{props.description}</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;