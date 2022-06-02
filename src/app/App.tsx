import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import * as S from 'src/app/components/containers/CenterContainer.styles';
import Header from 'src/app/components/Header';
import Router from 'src/app/components/Router';
import { StyleWrapper } from 'src/app/components/StyleWrapper/StyleWrapper';
import { useSession } from 'src/app/hooks/useSession';
import ReloadPageError from 'src/app/components/error/ReloadPageError';
import 'react-toastify/ReactToastify.min.css';

function App() {
  useSession();

  return (
    <StyleWrapper>
      <ErrorBoundary FallbackComponent={ReloadPageError}>
        <BrowserRouter>
          <Header />
          <S.CenterContainer>
            <Router />
          </S.CenterContainer>
        </BrowserRouter>
        <ToastContainer />
      </ErrorBoundary>
    </StyleWrapper>
  );
}

export default App;
