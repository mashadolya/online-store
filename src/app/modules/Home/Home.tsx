import { useAppSelector } from 'src/app/hooks/useAppSelector';
import { FC } from 'react';

const Home: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuthorized);
    const email = useAppSelector(({ auth }) => auth.user.email);

    return <div>{isAuth ? <h2>{`Welcome, Dear toxic ${email}!`}</h2> : <h2>Home Page</h2>}</div>;
};

export default Home;
