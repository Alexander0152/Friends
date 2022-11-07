import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'components/shared/ProtectedRoute';

import './app.scss';
import routes from 'constants/routes';
import { Main } from './views/Main';
import { FriendDetails } from './views/FriendDetails';

const {
    MAIN_ROUTE,
    FRIEND_ROUTE
} = routes;

export const App = () => {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={
                <ProtectedRoute>
                    <Main/>
                </ProtectedRoute>
            }/>
            <Route path={`${FRIEND_ROUTE}/:id`} element={
                <ProtectedRoute>
                    <FriendDetails/>
                </ProtectedRoute>
            }/>
        </Routes>
    );
}

