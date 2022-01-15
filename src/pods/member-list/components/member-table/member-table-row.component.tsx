import React from "react";
import {generatePath, Link} from "react-router-dom";
import {Member} from "../../member-list.vm";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";

interface Props {
    member: Member;
}

export const MemberTableRow: React.FC<Props> = (props) => {
    const {member} = props;

    return (

        <TableRow>
            <TableCell component="th" scope="row">
                <Avatar alt={`${member.id} avatar`} src={member.avatar_url}/>
            </TableCell>
            <TableCell align="right">{member.id}</TableCell>
            <TableCell align="right"> <Link to={generatePath("/detail/:id", {id: member.login})}>
                {member.login}
            </Link></TableCell>
        </TableRow>
    );
};
