import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={user ? <Element {...rest} /> : <Navigate to="/login" replace />}
        />
    );
};

ProtectedRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
    // ...rest can include other props passed to Route, like path, exact, etc.
};

export default ProtectedRoute;
