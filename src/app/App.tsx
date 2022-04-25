import { BrowserRouter } from 'react-router-dom';
import * as S from 'src/app/components/Container/CenterContainer.styles';
import Header from 'src/app/components/Header';
import Router from 'src/app/components/Router';
import { StyleWrapper } from 'src/app/components/theme/StyleWrapper/StyleWrapper';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { createUser } from 'src/app/modules/Authentication/slices/authorizationSlice';
import { getSession } from 'src/app/services/sessionService';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentUser = getSession();
        if (currentUser) {
            dispatch(createUser(currentUser));
        }
    }, []);

    return (
        <StyleWrapper>
            <BrowserRouter>
                <Header />
                <S.CenterContainer>
                    <Router />
                </S.CenterContainer>
            </BrowserRouter>
        </StyleWrapper>
    );
}

export default App;
