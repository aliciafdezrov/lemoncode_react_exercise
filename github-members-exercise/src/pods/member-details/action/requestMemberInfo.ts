import {memberAPI} from "api/memberAPI";
import {setMemberAction} from "./setMemberAction";

export const requestMemberInfo = (id: string) => dispatcher => {
    const promise = memberAPI.getSingleMemberByLogin(id);
    promise.then(member => dispatcher(setMemberAction(member)));
    return promise;
};