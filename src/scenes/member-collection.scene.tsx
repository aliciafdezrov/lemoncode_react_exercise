import * as React from 'react';
import {MembersTableComponent} from "../components/membersTable";
import {linkRoutes} from "../core";
import {Link} from "react-router-dom";

export const MemberCollectionScene = () => (
    <>
        <h1> Members Page</h1>
        <Link to={linkRoutes.memberInfo}>Navigate to member card</Link>
        <MembersTableComponent/>
    </>
);