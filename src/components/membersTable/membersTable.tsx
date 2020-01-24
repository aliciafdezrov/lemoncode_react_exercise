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
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

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
        memberAPI.getAllMembers(organizationName).then(members => setTotalMembers(members.length));
    };

    const loadMembersPaging = () => {
        memberAPI.getMembersPaging(organizationName, page + 1, rowsPerPage).then(members => setMembers(members));
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
        <div className="row">
            <h2> Members Page</h2>
            <div style={{
                display: "inline-flex",
            }}>
                <button onClick={loadMembers}>Load</button>
                <input type="text" value={organizationName} onChange={(event) => setOrganizationName(event.target.value)}/>
            </div>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <MemberHead/>
                        <TableBody>
                            {members.map((member: MemberEntity) => (
                                <MemberRow key={member.id} member={member}/>
                            ))}
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[2, 5, 10, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={totalMembers}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};
