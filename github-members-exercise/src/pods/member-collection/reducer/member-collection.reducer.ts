import {MemberEntity} from "../../../model/member";
import {actionsEnums} from "common";

export interface MemberCollectionState {
    organizationName: string;
    members: MemberEntity[];
    rowsPerPage: number;
    page: number;
}

const defaultMemberCollectionState = (): MemberCollectionState => ({
    organizationName: "lemoncode",
    members: [],
    rowsPerPage: 5,
    page: 0,
});

export const memberCollectionReducer = (
    state = defaultMemberCollectionState(),
    action
): MemberCollectionState => {
    switch (action.type) {
        case actionsEnums.UPDATE_MEMBER_COLLECTION:
            return handleMemberCollectionAction(state, action.members);

        case actionsEnums.SET_ORGANIZATION_NAME:
            return handleSetOrganizationNameAction(state, action.organizationName);

        case actionsEnums.SET_ROWS_PER_PAGE:
            return handleSetRowsPerPageAction(state, action.rowsPerPage);

    }
    return state;
};

const handleMemberCollectionAction = (
    state: MemberCollectionState,
    members
): MemberCollectionState => ({
    ...state,
    members
});

const handleSetOrganizationNameAction = (
    state: MemberCollectionState,
    organizationName
): MemberCollectionState => ({
    ...state,
    organizationName
});

const handleSetRowsPerPageAction = (
    state: MemberCollectionState,
    rowsPerPage
): MemberCollectionState => ({
    ...state,
    rowsPerPage
});