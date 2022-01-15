import React from "react";
import {generatePath, Link} from "react-router-dom";
import {Member} from "../../member-list.vm";

interface Props {
    member: Member;
}

export const MemberTableRow: React.FC<Props> = (props) => {
    const {member} = props;

    return (
        <tr>
            <td>
                <img src={member.avatar_url} style={{width: "5rem"}}/>
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <Link to={generatePath("/detail/:id", {id: member.login})}>
                    {member.login}
                </Link>
            </td>
        </tr>
    );
};
