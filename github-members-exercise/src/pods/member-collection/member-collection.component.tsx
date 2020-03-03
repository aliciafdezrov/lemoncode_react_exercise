import * as React from "react";
import {useEffect, useRef} from "react";
import {MembersTableComponent} from "./components/membersTable/membersTable";
import {MemberEntity} from "../../model/member";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Paper from "@material-ui/core/Paper";
import {LoadingIndicator} from "../../components/loader";

const classes = require('./member-collection.scss');

interface Props {
    members: MemberEntity[];
    organizationName: string;
}

interface DispatchProps {
    onChangeOrganizationName: (newName: string) => void;
    onLoadMembers?: (page?: number, rowsPerPage?: number) => void;
}

export const MemberCollectionComponent = (props: Props & DispatchProps) => {
    const {members, organizationName, onChangeOrganizationName, onLoadMembers} = props;
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
    const [page, setPage] = React.useState<number>(0);
    const firstRender = useRef(true);

    useEffect(() => {
        firstRender.current ? firstRender.current = false : onLoadMembers(page+1, rowsPerPage)
    }, [page, rowsPerPage]);

    const loadMembers = () => {
        setPage(0);
        onLoadMembers()
    };

    return (
            <div className={classes.contentRow}>
                <div className={classes.searcherRow}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        value={organizationName}
                        size="small"
                        onChange={(event) => onChangeOrganizationName(event.target.value)}
                    />
                    <IconButton aria-label="search" onClick={loadMembers}>
                        <SearchIcon/>
                    </IconButton>
                </div>
                <LoadingIndicator>
                    <Paper>
            <MembersTableComponent members={members}
                                   page={page}
                                   totalMembers={10}
                                   onChangePage={(newPage) => setPage(newPage)}
                                   onChangeRowsPerPage={(rowsPerPage1 => setRowsPerPage(rowsPerPage1))}
                                   rowsPerPage={rowsPerPage}/>
                    </Paper>
                </LoadingIndicator>
            </div>
    );
};