import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Mascaras from '../../assets/images/theater.png';
import '../../assets/styles/global.css';
import './style.css';

function Genero() {
    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);

    const [generos, setGeneros] = useState([]); //Listar generos via vetores

    // useEffect(() => {
    //     listar();  //PESQUISAR USE EFFECT
    // }, [])



    return (
        <div>
            <Header description="Cadastre os gêneros dos Filmes" />
            <main>
                <div className="centro">
                    <div className="generos">
                        <h1>Gêneros</h1>
                        <img src={Mascaras} alt="Disco de cinema" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Genero;