import React from 'react';
import {useNavigate} from "react-router-dom";
import {routes} from '../core/router';
import {LoginContainer} from '../pods/login';
import {CenteredLayout} from "../layouts/centered.layout";

export const LoginScene: React.FC = () => {
    const navigate = useNavigate();

    const handleOnNavigate = () => {
        navigate(routes.members)
    }

    return (
        <CenteredLayout>
            <LoginContainer onNavigate={handleOnNavigate}/>
        </CenteredLayout>
    );
};
