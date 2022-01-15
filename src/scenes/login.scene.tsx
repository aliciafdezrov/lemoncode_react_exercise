import React from 'react';
import {useNavigate} from "react-router-dom";
import {routes} from '../core/router';
import {LoginContainer} from '../pods/login';

export const LoginScene: React.FC = () => {
    const navigate = useNavigate();

    const handleOnNavigate = () => {
        navigate(routes.members)
    }

    return (
        <LoginContainer onNavigate={handleOnNavigate}/>
    );
};
