import React from "react";
import { Link, generatePath } from "react-router-dom";
import { getMemberList } from "./api/member-list.api";
import { MemberListComponent } from "./member-list.component";
import { mapMemberListFromApiToVm } from "./member-list.mapper";
import { Member } from "./member-list.vm";

export const MemberListContainer: React.FC = () => {
    const [members, setMembers] = React.useState<Member[]>([]);

    const onLoadMemberList = async () => {
        const apiMemberList = await getMemberList();
        const viewModelMemberList = mapMemberListFromApiToVm(apiMemberList);
        setMembers(viewModelMemberList);
    };

    React.useEffect(() => {
        onLoadMemberList();
    }, []);

    return (
        <>
            <MemberListComponent members={members}/>
        </>
    );
};
