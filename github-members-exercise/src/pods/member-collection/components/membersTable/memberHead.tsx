import * as React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import withStyles from "@material-ui/core/styles/withStyles";

export const columns = [
    { id: 'avatar_url', label: 'Avatar', minWidth: 50 },
    { id: 'id', label: 'Id', minWidth: 100 },
    { id: 'login', label: 'Name', minWidth: 100 },
    { id: 'navigation_link', label: '+Info', minWidth: 100}
];

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#03a9fc',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const MemberHead = () =>
    <TableHead>
        <TableRow>
            {columns.map(column => (
                <StyledTableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </StyledTableCell>
            ))}
        </TableRow>
    </TableHead>;