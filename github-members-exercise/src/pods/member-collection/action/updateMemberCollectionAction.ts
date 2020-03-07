import { actionsEnums } from "common";
import {MemberEntity} from "../../../model/member";
import {memberAPI} from "../../../api/memberAPI";

export interface IUpdateMemberCollectionAction {
    type: string;
    members: MemberEntity[];
}

export const updateMemberCollectionAction = (members: MemberEntity[]): IUpdateMemberCollectionAction => ({
    type: actionsEnums.UPDATE_MEMBER_COLLECTION,
    members
});