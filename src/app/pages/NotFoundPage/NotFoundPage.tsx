import { ErrorContainer } from 'src/app/pages/NotFoundPage/NotFoundPage.styles';
import { FC } from 'react';

const ERROR_MESSAGE =
  "We can't find the page you are looking for. Sorry for the inconvenience. Be toxic!";

const NotFoundPage: FC = () => {
  return (
    <ErrorContainer>
      <h1>{ERROR_MESSAGE}</h1>
    </ErrorContainer>
  );
};

export default NotFoundPage;
