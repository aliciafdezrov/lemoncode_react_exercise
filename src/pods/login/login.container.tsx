import React from "react";
import {LoginComponent} from "./login.component";

interface Props {
    onNavigate: () => void;
}

export const LoginContainer: React.FC<Props> = (props) => {
    const {onNavigate} = props;

    return (
        <LoginComponent onNavigate={onNavigate}/>
    );
};
