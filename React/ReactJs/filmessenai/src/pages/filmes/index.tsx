import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Disco from '../../assets/images/cinema.png';
import '../../assets/styles/global.css';
import './style.css';

function Filmes() {
    return (
        <div>
            <Header description="Cadastre os filmes de sua preferência" />
            <div className="centro">
                <div className="filmes">
                    <h1>Filmes</h1>
                    <img src={Disco} alt="Disco de cinema" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Filmes;