import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'hooks';
import routes from 'constants/routes';

interface Props {
    children: ReactNode;
    inverted?: boolean;
}

export const ProtectedRoute = ({ children, inverted }: Props) => {
    const { isAuthenticated } = useAppSelector(state => state.user);

    if (inverted) {
        if (isAuthenticated) {
            return <Navigate replace to={routes.MAIN_ROUTE}/>;
        }
        return <>{children}</>;
    } else {
        if (isAuthenticated) {
            return <>{children}</>;
        }
        return <Navigate replace to={routes.LOGIN_ROUTE}/>;
    }
};
