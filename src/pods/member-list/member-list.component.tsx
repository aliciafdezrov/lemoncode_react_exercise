import React from "react";
import {Member} from "./member-list.vm";
import {MemberTable} from "./components/member-table/member-table.component";
import {SearchInput} from "../../common/components";
import {Placeholder} from "../../common/components/placeholder";

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
            {members.length ? (
                <MemberTable members={members}/>
            ) : (
                <Placeholder text='No results found. Try a different search to look up for more options.'/>
            )}
        </>
    );
};
