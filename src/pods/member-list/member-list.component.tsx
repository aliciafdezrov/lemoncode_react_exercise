import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from "./api/member-list.api-model";

interface Props {
    members: Member[]
}

export const MemberListComponent: React.FC<Props> = (props) => {
    const {members} = props;

    return (
        <>
            <h2>Hello from List page</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member) => (
                    <tr>
                        <td>
                            <img src={member.avatar_url} style={{ width: "5rem" }} />
                        </td>
                        <td>
                            <span>{member.id}</span>
                        </td>
                        <td>
                            <Link to={generatePath("/detail/:id", { id: member.login })}>
                                {member.login}
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
