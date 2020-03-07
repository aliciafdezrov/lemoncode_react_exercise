import {memberAPI} from "api/memberAPI";
import {updateMemberCollectionAction} from "./updateMemberCollectionAction";
import {trackPromise} from "react-promise-tracker";

export const requestLoadMembersWithPaging = (organizationName: string, page: number, rowsPerPage: number) => dispatcher => {
    const promise = memberAPI.getMembersPaging(organizationName, page, rowsPerPage);
    trackPromise(promise.then(members => dispatcher(updateMemberCollectionAction(members))),'members-collection-table');
    return promise;
};