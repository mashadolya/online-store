import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Authentication from './modules/Authentication/Authentication';
import NotFound from 'app/pages/NotFound';
import Home from 'app/modules/Home/Home';
import ROUTES from 'app/constants/routes';

const { LOGIN } = ROUTES;

function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Link to={'/'}>Home</Link>
                    <Link to={LOGIN}>Login</Link>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path={LOGIN} element={<Authentication />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
