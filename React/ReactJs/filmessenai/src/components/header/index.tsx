import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/styles/global.css';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
    description: string;
    text?: string;
}

const Header: React.FC<HeaderProps> = (props) => { //Fc = Function Component
    let history = useHistory(); //Usando o método Histoy

    const logout = () => { //Arrow function para remover o token e empurrar o usuaário para a home
        localStorage.removeItem('token-filmes'); //Removendo token
        history.push('/'); //Empurra usuário para a home
    }
        const menu = () => {
            const token = localStorage.getItem('token-filmes');

            if (token === undefined || token === null) {
                return (
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/cadastro">Cadastro</Link></li>
                    </ul>
                )
            } else {
                return (
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/filmes">Filmes</Link></li>
                        <li><Link to="/generos">Gênero</Link></li>

                        <li><Link to="" onClick={event => {
                            event.preventDefault();
                            logout();
                        }}>Logout</Link></li>
                    </ul>
                )
            }
        }

    return (
        <div className="principal">
            <div className="header">
                <div className="align">
                    <nav>
                        <Link to="/"><img id="img" src={logo} alt="Logo" /></Link>
                        {menu()}
                    </nav>
                    <h3>{props.description}</h3>
                    {props.text && <p>{props.text}</p>}
                </div>
            </div>
        </div>
    );
}

export default Header;