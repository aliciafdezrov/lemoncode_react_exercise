import * as React from "react";
import {MemberEntity} from "../../../../model/member";
import {MemberHead} from "./memberHead";
import {TableBody} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import {MemberRow} from "./memberRow";
import {MemberFooter} from "./memberFooter";

interface Props {
    members: MemberEntity[];
    page: number;
    rowsPerPage: number;
    onChangePage: (newPage: number) => void;
    onChangeRowsPerPage: (rowsPerPage: number) => void;
    totalMembers: number;
}

export const MembersTableComponent = (props: Props) => {
    const {page, rowsPerPage, onChangePage, onChangeRowsPerPage, members, totalMembers} = props;

    const handleChangePage = (event, newPage) => {
        onChangePage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        onChangeRowsPerPage(parseInt(event.target.value, 10));
        onChangePage(0);
    };

    return (
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
    );
};
