import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Error from './pages/Error';

import Header from './components/Header';

export function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/movie/:id' element={ <Movies /> } />

                <Route path='*' element={ <Error /> }/>
            </Routes>   
        </BrowserRouter>
    )
}
