import { format } from 'path';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Login from './pages/login/index';

function Routers() {
    return(
        <BrowserRouter>
            <Route  path="/"  exact component={Home}/>
            <Route  path="/login" component={Login}/>
            <Route  path="/cadastro" component={Cadastro}/>
        </BrowserRouter>
    );
}

export default Routers;