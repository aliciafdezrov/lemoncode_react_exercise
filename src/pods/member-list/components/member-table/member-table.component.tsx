import React from "react";
import {Member} from "../../member-list.vm";
import {MemberTableRow} from "./member-table-row.component";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Props {
    members: Member[]
}

export const MemberTable: React.FC<Props> = (props) => {
    const {members} = props;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="members table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member) => <MemberTableRow key={member.id} member={member}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
