import * as React from 'react';
import { MemberEntity } from '../../model/member';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

export const columns = [
    { id: 'avatar_url', label: 'Avatar', minWidth: 170 },
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'login', label: 'Name', minWidth: 100 }
];

export const MemberHead = () =>
    <TableHead>
        <TableRow>
            {columns.map(column => (
                <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>