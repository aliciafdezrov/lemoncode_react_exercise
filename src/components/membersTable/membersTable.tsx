import * as React from "react";
import {useEffect, useRef} from "react";
import {MemberEntity} from "../../model/member";
import {memberAPI} from "../../api/memberAPI";
import {MemberHead} from "./memberHead";
import {TableBody} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import {MemberRow} from "./memberRow";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import {MemberFooter} from "./memberFooter";
import {trackPromise} from 'react-promise-tracker';
import {LoadingIndicator} from "../loader";

const classes = require('./membersTable.scss');

interface Props {
}

export const MembersTableComponent = (props: Props) => {
    const firstRender = useRef(true);
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [organizationName, setOrganizationName] = React.useState<string>("lemoncode");
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(2);
    const [page, setPage] = React.useState<number>(0);
    const [totalMembers, setTotalMembers] = React.useState<number>(0);

    const loadMembers = () => {
        setPage(0);
        trackPromise(
            memberAPI.getAllMembers(organizationName).then(members => setTotalMembers(members.length))
        );
    };

    const loadMembersPaging = () => {
        trackPromise(
            memberAPI.getMembersPaging(organizationName, page + 1, rowsPerPage).then(members => setMembers(members))
        );
    };

    useEffect(() => {
        firstRender.current ? firstRender.current = false : loadMembersPaging()
    }, [page, rowsPerPage, totalMembers]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <div className={classes.contentRow}>
                <div className={classes.searcherRow}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        value={organizationName}
                        size="small"
                        onChange={(event) => setOrganizationName(event.target.value)}
                    />
                    <IconButton aria-label="search" onClick={loadMembers}>
                        <SearchIcon/>
                    </IconButton>
                </div>
                <LoadingIndicator>
                    <Paper>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <MemberHead/>
                                <TableBody>
                                    {members.map((member: MemberEntity) => (
                                        <MemberRow key={member.id} member={member}/>
                                    ))}
                                </TableBody>

                                <MemberFooter totalCount={totalMembers}
                                              rowsPerPage={rowsPerPage}
                                              page={page}
                                              handleChangePage={handleChangePage}
                                              handleChangeRowsPerPage={handleChangeRowsPerPage}/>
                            </Table>
                        </TableContainer>
                    </Paper>
                </LoadingIndicator>
            </div>
        </div>
    );
};
