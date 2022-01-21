import React from "react";

interface Props {
    id: string;
}

export const MemberDetailComponent: React.FC<Props> = (props) => {
    const { id } = props;

    return (
        <>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
        </>
    );
};
