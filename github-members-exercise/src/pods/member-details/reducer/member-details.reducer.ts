import {createDefaultMemberEntity, MemberEntity} from "../../../model/member";
import {actionsEnums} from "common";

export interface MemberDetailsState {
    member: MemberEntity;
}

const defaultMemberDetailsState = (): MemberDetailsState => ({
    member: createDefaultMemberEntity()
});

export const memberDetailsReducer = (
    state = defaultMemberDetailsState(),
    action
): MemberDetailsState => {
    switch (action.type) {
        case actionsEnums.SET_MEMBER:
            return handleSetMemberAction(state, action.member);

    }
    return state;
};

const handleSetMemberAction = (
    state: MemberDetailsState,
    member
): MemberDetailsState => ({
    ...state,
    member
});
