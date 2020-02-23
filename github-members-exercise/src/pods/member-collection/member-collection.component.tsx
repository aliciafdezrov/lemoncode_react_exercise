import * as React from "react";
import {MembersTableComponent} from "./components/membersTable/membersTable";
import {MemberEntity} from "../../model/member";

interface Props {
    members: MemberEntity[];
    organizationName: string;
    onChangeOrganizationName: (newName: string) => void;
}

export const MemberCollectionComponent = (props: Props) => {
    const {members, organizationName, onChangeOrganizationName} = props;

    return (
        <>
            <MembersTableComponent members={members}
                                   organizationName={organizationName}
                                   onChangeOrganizationName={onChangeOrganizationName}/>
        </>
    );
};