import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'components/shared/ProtectedRoute';

import './app.scss';
import routes from 'constants/routes';
import { Main } from 'views/Main';
import { FriendDetails } from 'views/FriendDetails';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { useAppSelector } from 'hooks';
import { CustomSpinner } from 'components/shared/CustomSpinner';
import { selectIsAppLoading } from 'store/App/appSelectors';

const {
    MAIN_ROUTE,
    FRIEND_ROUTE
} = routes;

export const App = () => {
    const isAppLoading = useAppSelector(selectIsAppLoading);

    return (
        <ErrorBoundary>
            {isAppLoading && <CustomSpinner/>}
            <Routes>
                <Route path={MAIN_ROUTE} element={
                    <ProtectedRoute>
                        <Main/>
                    </ProtectedRoute>
                }/>
                <Route path={`${FRIEND_ROUTE}/:friendId`} element={
                    <ProtectedRoute>
                        <FriendDetails/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </ErrorBoundary>
    );
}

