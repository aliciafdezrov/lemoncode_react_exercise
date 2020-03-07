import {memberAPI} from "api/memberAPI";
import {setMemberAction} from "./setMemberAction";
import {trackPromise} from "react-promise-tracker";

export const requestMemberInfo = (id: string) => dispatcher => {
    const promise = memberAPI.getSingleMemberByLogin(id);
    trackPromise(promise.then(member => dispatcher(setMemberAction(member))), 'member-details');
    return promise;
};