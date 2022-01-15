import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from "./member-list.vm";
import {MemberTable} from "./components/member-table/member-table.component";
import {SearchInput} from "../../common/components";

interface Props {
    members: Member[];
    onSearch: (query: string) => void;
}

export const MemberListComponent: React.FC<Props> = (props) => {
    const {members, onSearch} = props;

    return (
        <>
            <h2>Hello from List page</h2>
            <SearchInput defaultSearch="lemoncode" onSearch={onSearch}/>
            <MemberTable members={members}/>
        </>
    );
};
