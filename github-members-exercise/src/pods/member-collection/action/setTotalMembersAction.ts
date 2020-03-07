import { actionsEnums } from "common";
import {MemberEntity} from "../../../model/member";
import {memberAPI} from "../../../api/memberAPI";

export interface ISetTotalMembersAction {
    type: string;
    totalMembers: number;
}

export const setTotalMembersAction = (totalMembers: number): ISetTotalMembersAction => ({
    type: actionsEnums.SET_TOTAL_MEMBERS,
    totalMembers
});