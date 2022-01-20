import React from "react";
import {generatePath, Link} from "react-router-dom";
import {Member} from "../../member-list.vm";
import TableRow from "@mui/material/TableRow";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import {styled} from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

interface Props {
    member: Member;
}

export const MemberTableRow: React.FC<Props> = (props) => {
    const {member} = props;

    return (
        <TableRow>
            <StyledTableCell component="th" scope="row">
                <Avatar alt={`${member.id} avatar`} src={member.avatar_url}/>
            </StyledTableCell>
            <StyledTableCell align="right">{member.id}</StyledTableCell>
            <StyledTableCell align="right"> <Link to={generatePath("/detail/:id", {id: member.login})}>
                {member.login}
            </Link></StyledTableCell>
        </TableRow>
    );
};
