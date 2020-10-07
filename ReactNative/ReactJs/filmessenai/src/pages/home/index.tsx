import React from 'react';
import Header from '../../components/header/index';
import cinema from '../../assets/images/cinema.png';
import theater from '../../assets/images/theater.png';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';


function Home() {
    return (
        <div className="principal">
            <Header />
            <div className="prin">
                <div className="txtH1">
                    <h1>Monte sua coletânea de filmes...</h1>
                </div>
                <div className="txtPrin">
                    <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing tempor</h3>
                    <text>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </text>
                </div>
                <div className="filmCate">
                    <div className="Filmes">
                        <img src={cinema} alt="disco de cinema" />
                        <h3>Filmes</h3>
                        <p>Filmes Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="categoria">
                        <img src={theater} alt="mascaras de teatro" />
                        <h3>Categoria</h3>
                        <p>Filme Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;