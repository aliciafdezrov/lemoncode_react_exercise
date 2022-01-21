import React from "react";
import {Member} from "../../member-list.vm";
import {MemberTableRow} from "./member-table-row.component";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";
import {styled} from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    }
}));

interface Props {
    members: Member[]
}

export const MemberTable: React.FC<Props> = (props) => {
    const {members} = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="members table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Avatar</StyledTableCell>
                        <StyledTableCell align="right">Id</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member) => <MemberTableRow
                        key={member.id} member={member}/>)}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                            colSpan={3}
                            count={members.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};
