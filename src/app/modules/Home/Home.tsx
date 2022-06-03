import { FC } from 'react';
import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

import CardList from 'src/app/modules/Products/components/CardList';
import { useProducts } from 'src/app/hooks/useProducts';

const Home: FC = () => {
  const isAuth = useAppSelector(({ auth }) => auth.isAuthorized);
  const email = useAppSelector(({ auth }) => auth.user.email);
  const [products] = useProducts();

  return (
    <>
      {isAuth ? <h2>{`Welcome, Dear toxic ${email}!`}</h2> : <h2>Home Page</h2>}
      <CardList products={products} />
    </>
  );
};

export default Home;
