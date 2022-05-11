import { useAppSelector } from 'src/app/hooks/useAppSelector';
import { FC } from 'react';
import CardList from 'src/app/modules/Products/components/CardList';
import PRODUCTS from 'src/app/mocks/products.json';

const Home: FC = () => {
  const isAuth = useAppSelector(({ auth }) => auth.isAuthorized);
  const email = useAppSelector(({ auth }) => auth.user.email);

  return (
    <>
      {isAuth ? <h2>{`Welcome, Dear toxic ${email}!`}</h2> : <h2>Home Page</h2>}
      <CardList products={PRODUCTS} />
    </>
  );
};

export default Home;
