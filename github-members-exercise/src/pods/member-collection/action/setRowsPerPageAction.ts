import { actionsEnums } from "common";

export interface ISetRowsPerPageAction {
    type: string;
    rowsPerPage: number;
}

export const setRowsPerPageAction = (rowsPerPage: number): ISetRowsPerPageAction => ({
    type: actionsEnums.SET_ROWS_PER_PAGE,
    rowsPerPage
});