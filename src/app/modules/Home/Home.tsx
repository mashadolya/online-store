import { FC } from 'react';

import CardList from 'src/app/modules/Products/components/CardList';
import { useProducts } from 'src/app/hooks/useProducts';
import { selectIsAuthorized, selectUser } from 'src/app/store/slices/authorization/selectors';

const Home: FC = () => {
  const products = useProducts();
  const user = selectUser();
  const isAuthorized = selectIsAuthorized();

  return (
    <>
      {isAuthorized ? <h2>{`Welcome, Dear toxic ${user.email}!`}</h2> : <h2>Home Page</h2>}
      <CardList products={products} />
    </>
  );
};

export default Home;
