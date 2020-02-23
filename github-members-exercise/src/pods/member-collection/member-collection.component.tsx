import * as React from "react";
import {MembersTableComponent} from "./components/membersTable/membersTable";
import {MemberEntity} from "../../model/member";

interface Props {
    members: MemberEntity[];
}

export const MemberCollectionComponent = (props: Props) => {
    const {members} = props;

    return (
        <>
            <MembersTableComponent members={members}/>
        </>
    );
};