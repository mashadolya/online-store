import { BrowserRouter } from 'react-router-dom';
import * as S from 'src/app/components/containers/CenterContainer.styles';
import Header from 'src/app/components/Header';
import Router from 'src/app/components/Router';
import { StyleWrapper } from 'src/app/components/StyleWrapper/StyleWrapper';
import { useSession } from 'src/app/hooks/useSession';

function App() {
  useSession();

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
