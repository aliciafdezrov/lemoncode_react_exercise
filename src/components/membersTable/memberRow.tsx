import * as React from 'react';
import {MemberEntity} from '../../model/member';
import {columns} from "./memberHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Avatar} from "@material-ui/core";

export const MemberRow = (props: {member : MemberEntity}) =>
    <TableRow hover role="checkbox" tabIndex={-1} key={props.member.id} onClick={() =>console.log(props.member.id)}>
        {columns.map(column => {
            const value = props.member[column.id];
            return ( (column.id == "avatar_url") ?
                    <TableCell key={column.id}>
                        <Avatar alt="Remy Sharp" src={value} />
                    </TableCell>
                    :
                <TableCell key={column.id}>
                    {value}
                </TableCell>
            );
        })}
    </TableRow>
