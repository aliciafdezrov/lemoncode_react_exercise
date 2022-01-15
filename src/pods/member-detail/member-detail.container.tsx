import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberDetailComponent } from "./member-detail.component";

interface Props {
    id: string;
}

export const MemberDetailContainer: React.FC<Props> = (props) => {
    const {id} = props;
    return (
        <>
            <MemberDetailComponent id={id}/>
        </>
    );
};
