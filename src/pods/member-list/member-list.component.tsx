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
        <div style={{padding: '0 5%'}}>
            <div style={{
                height: 50,
                marginBottom: 20,
                width: '30%'
            }}>
                <SearchInput fullWidth={true} variant="outlined" defaultSearch="lemoncode" onSearch={onSearch}
                             placeholder="Search something"/>
            </div>
            {members.length ? (
                <MemberTable members={members}/>
            ) : (
                <Placeholder text='No results found. Try a different search to look up for more options.'/>
            )}
        </div>
    );
};
