import React from "react";
import {Member} from "../../member-list.vm";
import {MemberTableRow} from "./member-table-row.component";

interface Props {
    members: Member[]
}

export const MemberTable: React.FC<Props> = (props) => {
    const {members} = props;

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Avatar</th>
                <th>Id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {members.map((member) => <MemberTableRow key={member.id} member={member}/>)}
            </tbody>
        </table>
    );
};
