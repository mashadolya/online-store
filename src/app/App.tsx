import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'app/pages/NotFound';
import Home from 'app/modules/Home/Home';
import { StyleWrapper } from 'app/components/theme/StyleWrapper/StyleWrapper';
import * as S from 'app/components/Container/Container.styles';
import Authentication from 'app/modules/Authentication/Authentication';
import Header from 'app/components/Header';
import ROUTES from 'app/constants/routes';
import SignInPage from 'app/modules/Authentication/pages/SignInPage';

const { LOGIN, HOME, NOT_FOUND } = ROUTES;

function App() {
    return (
        <>
            <StyleWrapper>
                <BrowserRouter>
                    <Header />
                    <S.ContainerStyled>
                        <Routes>
                            <Route path={HOME} element={<Home />} />
                            <Route index element={<Home />} />
                            <Route path={LOGIN} element={<SignInPage />} />
                            <Route path={NOT_FOUND} element={<NotFound />} />
                        </Routes>
                    </S.ContainerStyled>
                </BrowserRouter>
            </StyleWrapper>
        </>
    );
}

export default App;
