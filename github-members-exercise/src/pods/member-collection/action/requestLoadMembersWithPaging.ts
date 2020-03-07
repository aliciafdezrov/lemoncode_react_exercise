import {memberAPI} from "api/memberAPI";
import {updateMemberCollectionAction} from "./updateMemberCollectionAction";

export const requestLoadMembersWithPaging = (organizationName: string, page: number, rowsPerPage: number) => dispatcher => {
    const promise = memberAPI.getMembersPaging(organizationName, page, rowsPerPage);
    promise.then(members => dispatcher(updateMemberCollectionAction(members)));
    return promise;
};