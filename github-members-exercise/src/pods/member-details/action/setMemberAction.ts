import { actionsEnums } from "common";
import {MemberEntity} from "../../../model/member";

export interface ISetMemberAction {
    type: string;
    member: MemberEntity;
}

export const setMemberAction = (member: MemberEntity): ISetMemberAction => ({
    type: actionsEnums.SET_MEMBER,
    member
});