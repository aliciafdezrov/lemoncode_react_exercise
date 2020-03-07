import { actionsEnums } from "common";

export interface ISetPageAction {
    type: string;
    page: number;
}

export const setPageAction = (page: number): ISetPageAction => ({
    type: actionsEnums.SET_PAGE,
    page
});