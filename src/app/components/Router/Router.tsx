import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES } from 'src/app/routes/routes';

const Router: FC = () => {
    return (
        <Routes>
            {PUBLIC_ROUTES.map(({ path, element, index }) => (
                //TODO: ???
                <Route path={path} index={index} element={element} key={path ?? 'index'} />
            ))}
        </Routes>
    );
};

export default Router;
