import React from 'react';
import Header from '../../components/header';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Button from '../../components/button';

function Perfil() {
    return (
        <div>
            <Header description="Edite seu perfil" />
            <div className="centro">
                <div className="Perfil">
                    <h1>Perfil</h1>
                    <div className="Nome">
                        <Input type="text" name="Nome" label="Nome" />
                    </div>

                    <div className="Email">
                        <Input type="Email" name="Email" label="E-mail" />
                    </div>

                    <div className="Permissao">
                        <label htmlFor="Permissão">Permissão</label>
                        <select name="Permissao" id="permi" className="escolhaPerm">
                            <option value="Usuario">Usuário</option>
                            <option value="Adm">Administrador</option>
                        </select>
                    </div>

                    <div className="senha">
                        <Input type="Password" name="Senha" label="Senha" />
                    </div>

                    <div className="submit">
                        <Button name="Editar" />
                        <Button name="Salvar" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Perfil;