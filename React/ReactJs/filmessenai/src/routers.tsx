import { format } from 'path';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Login from './pages/login/index';
import Filmes from './pages/filmes/index';
import Generos from './pages/generos/index'
import Perfil from './pages/perfil/index';

function Routers() {
    return(
        <BrowserRouter>
            <Route  path="/"  exact component={Home}/>
            <Route  path="/login" component={Login}/>
            <Route  path="/cadastro" component={Cadastro}/>
            <Route  path="/filmes" component={Filmes}/>
            <Route  path="/generos" component={Generos}/>
            <Route  path="/perfil" component={Perfil}/>
        </BrowserRouter>
    );
}

export default Routers;