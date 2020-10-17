import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Mascaras from '../../assets/images/theater.png';
import './style.css';
import Refresh from '../../assets/images/refresh.png';
import Trash from '../../assets/images/trash.png';
import { stringify } from 'querystring';
import Input from '../../components/input';
import Button from '../../components/button';

function Genero() {
    //prop string { get; set; }
    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);

    const [generos, setGeneros] = useState([]); //Listar generos via vetores

    //Listar generos
    //Use effect permite executar efeitos colaterais em componentes funcionais.
    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
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

    //Deletar Generos
    const Delete = (id: any) => {
        fetch("http://localhost:5000/api/generos/" + id, {
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

    //Atualizar Genero
    const Atualizar = (id: number) => {
        fetch('http://localhost:5000/api/generos/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdGenero(dados.idGenero);
                setGenero(dados.nome);
            })
            .catch(err => console.error(err));
    }

    //Cadastrar genero
    const salvar = () => {
        const form = {
            nome: genero
        };
        // isso é verdade ? sim : não;
        const method = (idGenero === 0 ? 'POST' : 'PUT');
        const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos/' : 'http://localhost:5000/api/generos/' + idGenero);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Gênero: Operação realizada com sucesso!');
                setIdGenero(0);
                setGenero('');
                listar();
            })
            .catch(erro => console.error(erro));

    }



    return (
        <div>
            <Header description="Cadastre os gêneros dos Filmes" />
            <main>
                <div className="centro1">
                    <div className="generos">
                        <h1>Gêneros</h1>
                        <img src={Mascaras} alt="Disco de cinema" />
                    </div>
                    <div className="main-body">
                        <table>
                            <thead>
                                <tr>
                                    <th className="th">Lista de gênero</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    generos.map((item: any) => {
                                        return (
                                            <tr key={item.idGenero}>
                                                <td>{item.nome}</td>
                                                <td>
                                                    <img src={Refresh} alt="" className="icon" onClick={() => Atualizar(item.idGenero)} />
                                                    <img src={Trash} alt="" className="icon" onClick={() => Delete(item.idGenero)} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <form onSubmit={event => {
                            event.preventDefault();
                            salvar()
                        }}>
                            <div className="form">
                                <Input name="genero" label="Cadastrar gênero" value={genero} onChange={e => setGenero(e.target.value)} />
                                <div className="btn">
                                    <Button name="Salvar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Genero;