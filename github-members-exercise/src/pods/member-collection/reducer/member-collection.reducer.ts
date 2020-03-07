import {MemberEntity} from "../../../model/member";
import {actionsEnums} from "common";

export interface MemberCollectionState {
    organizationName: string;
    members: MemberEntity[];
    rowsPerPage: number;
    page: number;
    totalMembers: number;
}

const defaultMemberCollectionState = (): MemberCollectionState => ({
    organizationName: "lemoncode",
    members: [],
    rowsPerPage: 5,
    page: 0,
    totalMembers: 0,
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

        case actionsEnums.SET_PAGE:
            return handleSetPageAction(state, action.page);

        case actionsEnums.SET_TOTAL_MEMBERS:
            return handleSetTotalMembersAction(state, action.totalMembers);
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

const handleSetPageAction = (
    state: MemberCollectionState,
    page
): MemberCollectionState => ({
    ...state,
    page
});

const handleSetTotalMembersAction = (
    state: MemberCollectionState,
    totalMembers
): MemberCollectionState => ({
    ...state,
    totalMembers
});