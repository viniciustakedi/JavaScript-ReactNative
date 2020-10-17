import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Disco from '../../assets/images/cinema.png';
import Refresh from '../../assets/images/refresh.png';
import Trash from '../../assets/images/trash.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Generos from '../../pages/generos/index';
import './style.css';
import { getNodeMajorVersion } from 'typescript';
import { url } from 'inspector';

function Filmes() {

    const [filme, setFilme] = useState('');
    const [idFilme, setIdFilme] = useState(0);
    const [filmes, setFilmes] = useState([]); //Listar generos via vetores
    //genero listar
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]); //Listar generos via vetores

    //Listar generos
    //Use effect permite executar efeitos colaterais em componentes funcionais.
    useEffect(() => {
        listar();
    }, []);

    const url1 = "http://localhost:5000/api/filmes";
    const url2 = "http://localhost:5000/api/generos";


    const listar = () => {  
        fetch(url1, {
            method: 'GET',
            headers: {
                //Bearer é o token authentication, um Schema paraautenticação HTTP
                //Ele indentifica recursos protegidos por um OAuth2
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados)
            })
            .catch(ops => console.error(ops));
    }

    //Deletar Generos
    const Delete = (id: any) => {
        fetch("http://localhost:5000/api/filmes/" + id, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json()) //promessa de resposta, transforma em json
            .then(dados => {
                listar();
            })
            .catch(erro => console.error(erro))
    }

    //Atualizar filme
    const Atualizar = (id: number) => {
        fetch('http://localhost:5000/api/filmes/' + id && 'http://localhost:5000/api/generos/' +id ,{
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setFilme(dados.titulo);
                setGenero(dados.nome)
            })
            .catch(err => console.error(err));
    }

    //Cadastrar filme
    const salvar = () => {
        const form = {
            titulo: filme,
            nome: genero
        };
        // isso é verdade ? sim : não;
        const method = (idFilme === 0 ? 'POST' : 'PUT');
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes/' : 'http://localhost:5000/api/filmes/' + idFilme);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Filme: Operação realizada com sucesso!');
                setIdFilme(0);
                setFilme('');
                listar();
            })
            .catch(erro => console.error(erro));
    }


    function Genero() {
        //prop string { get; set; }
        const [genero, setGenero] = useState('');
        const [idGenero, setIdGenero] = useState(0);

        const [generos, setGeneros] = useState([]); //Listar generos via vetores

        //Listar generos
        //Use effect permite executar efeitos colaterais em componentes funcionais.
        useEffect(() => {
            Listando();
        }, []);

        const Listando = () => {
            fetch("http://localhost:5000/api/generos", {
                method: 'GET',
                headers: {
                    //Bearer é o token authentication, um Schema paraautenticação HTTP
                    //Ele indentifica recursos protegidos por um OAuth2
                    authorization: 'Bearer ' + localStorage.getItem('token-filmes')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    setGeneros(dados)
                })
                .catch(ops => console.error(ops));
        }
    }


    return (
        <div>
            <Header description="Cadastre os filmes de sua preferência" />
            <div className="centro">
                <div className="filmes">
                    <h1>Filmes</h1>
                    <img src={Disco} alt="Disco de cinema" />
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="th">Lista de Filmes</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                filmes.map((item: any) => {
                                    return (
                                        <tr key={item.idFilmes}>
                                            <td>{item.titulo}</td>
                                            <td>{item.nome}</td>
                                            <td>
                                                <img src={Refresh} alt="" className="icon" onClick={() => Atualizar(item.idFilme)} />
                                                <img src={Trash} alt="" className="icon" onClick={() => Delete(item.idFilme)} />
                                            </td>
                                        </tr>
                                    )
                                })

                            
                            }
                        </tbody>
                    </table>
                </div>

                <form onSubmit={event => {
                    event.preventDefault();
                    salvar()
                }}>

                    <div className="form">
                        <Input name="Filme" label="Cadastrar filme" value={filme} onChange={e => setFilme(e.target.value)} />
                        <select className="select" name="genero" value={genero}>
                            <option value="0" selected disabled>Gênero</option>
                            {
                                generos.map((name: any) => {
                                    return (
                                        <option>{}</option>
                                    )
                                })
                            }
                        </select>
                        <div className="btn">
                            <Button name="Salvar" />
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Filmes;