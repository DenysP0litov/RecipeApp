import React from 'react';
import { Navigate } from "react-router-dom";

type Props = {
    condition: boolean;
    children: React.ReactElement;
};

export const ProtectedRoute: React.FC<Props> = ({ condition, children }) => {
    if (!condition) {
        return <Navigate to='/auth' replace/>;
    }
        
    return <>{children}</>;
};