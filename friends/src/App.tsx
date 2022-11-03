import React from 'react';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import routes from 'constants/routes';
import { Main } from './views/Main';
import { ProtectedRoute } from 'components/shared/ProtectedRoute';

const {
    MAIN_ROUTE
} = routes;

export const App = () => {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={
                <ProtectedRoute>
                    <Main/>
                </ProtectedRoute>
            }/>
        </Routes>
    );
}

