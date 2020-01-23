import * as React from "react";
import {MemberEntity} from "../../model/member";
import {memberAPI} from "../../api/memberAPI";
import {MemberHead} from "./memberHead";
import {TableBody} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import {MemberRow} from "./memberRow";

interface Props {
}

export const MembersTableComponent = (props: Props) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [organizationName, setOrganizationName] = React.useState<string>("lemoncode");

    const loadMembers = () => {
        memberAPI.getAllMembers(organizationName).then(members => setMembers(members));
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
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};
