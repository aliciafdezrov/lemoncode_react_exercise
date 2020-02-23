import {MemberEntity} from "../../../model/member";
import {actionsEnums} from "common";

export interface MemberCollectionState {
    organizationName: string;
    members: MemberEntity[];
}

const defaultMemberCollectionState = (): MemberCollectionState => ({
    organizationName: "lemoncode",
    members: []
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