import React from "react";
import { Link, generatePath } from "react-router-dom";

interface Props {
    id: string;
}

export const MemberDetailComponent: React.FC<Props> = (props) => {
    const { id } = props;

    return (
        <>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
            <Link to="/list">Back to list page</Link>
        </>
    );
};
