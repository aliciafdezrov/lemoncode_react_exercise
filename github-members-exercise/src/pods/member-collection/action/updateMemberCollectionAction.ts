import { actionsEnums } from "common";
import {MemberEntity} from "../../../model/member";
import {memberAPI} from "../../../api/memberAPI";

export interface IUpdateMemberCollectionAction {
    type: string;
    memberCollection: MemberEntity[];
}

export const updateMemberCollectionAction = (memberCollection: MemberEntity[]): IUpdateMemberCollectionAction => ({
    type: actionsEnums.UPDATE_MEMBER_COLLECTION,
    memberCollection
});