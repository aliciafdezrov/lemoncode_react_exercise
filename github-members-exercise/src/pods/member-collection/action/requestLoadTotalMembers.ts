import {memberAPI} from "api/memberAPI";
import {setTotalMembersAction} from "./setTotalMembersAction";

export const requestLoadTotalMembers = (organizationName: string) => dispatcher => {
    const promise = memberAPI.getTotalMembers(organizationName);
    promise.then(totalMembers => dispatcher(setTotalMembersAction(totalMembers)));
    return promise;
};