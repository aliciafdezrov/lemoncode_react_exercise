import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import TableFooter from "@material-ui/core/TableFooter";

interface Props {
    totalCount: number;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event, newPage) => void;
    handleChangeRowsPerPage: (event) => void;
}

export const MemberFooter = (props: Props) => {
    const {totalCount, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage} = props;

    return (
    <TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[2, 5, 10, {label: 'All', value: -1}]}
                colSpan={3}
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {'aria-label': 'rows per page'},
                    native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </TableRow>
    </TableFooter>
    );
};
