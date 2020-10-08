import React from 'react';
import Header from '../../components/header/index';
import cinema from '../../assets/images/cinema.png';
import theater from '../../assets/images/theater.png';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';


function Home() {
    return (
        <div>
            <Header description="Conheça nossa coletânea" />
            <div className="centro">
                <div className="home1">
                    <h1>Monte sua coletânea de filmes...</h1>
                    <div className="txt">
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <div className="txtPd">
                        <div className="filmes">
                            <img src={cinema} alt="disco de cinema"/>
                            <h3>Filmes</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <div className="categoria">
                            <img src={theater} alt="mascaras de teatro"/>
                            <h3>Categoria</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Home;