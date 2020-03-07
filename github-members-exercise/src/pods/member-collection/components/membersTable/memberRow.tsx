import * as React from 'react';
import {MemberEntity} from '../../../../model/member';
import {columns} from "./memberHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Avatar} from "@material-ui/core";
import {linkRoutes} from "core";
import {Link} from "react-router-dom";

export const MemberRow = (props: { member: MemberEntity }) =>
    <TableRow hover role="checkbox" tabIndex={-1} key={props.member.id}>
        {columns.map(column => {
            const value = props.member[column.id];
            if (column.id == "avatar_url")
                return (<TableCell key={column.id}>
                    <Avatar alt="Remy Sharp" src={value}/>
                </TableCell>);
            else if (column.id == "navigation_link")
                return (<TableCell key={column.id}>
                    <Link to={linkRoutes.memberInfo(props.member.login)}>Member details</Link>
                </TableCell>);
            else
                return (<TableCell key={column.id}>
                    {value}
                </TableCell>)
        })}
    </TableRow>;
