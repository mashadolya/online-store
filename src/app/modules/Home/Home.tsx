import { useAppSelector } from 'src/app/hooks/useAppSelector';
import { FC } from 'react';
import CardList from 'src/app/modules/Products/components/CardList';
import PRODUCTS from 'src/app/mocks/products.json';
import { Product } from 'src/app/models/Product';

const Home: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuthorized);
    const email = useAppSelector(({ auth }) => auth.user.email);

    return (
        <>
            {isAuth ? <h2>{`Welcome, Dear toxic ${email}!`}</h2> : <h2>Home Page</h2>}
            <CardList products={PRODUCTS as unknown as Product[]} />
        </>
    );
};

export default Home;
