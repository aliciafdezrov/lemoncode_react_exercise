import { actionsEnums } from "common";

export interface ISetOrganizationNameAction {
    type: string;
    organizationName: string;
}

export const setOrganizationNameAction = (organizationName: string): ISetOrganizationNameAction => ({
    type: actionsEnums.SET_ORGANIZATION_NAME,
    organizationName
});