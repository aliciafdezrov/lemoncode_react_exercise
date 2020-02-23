import {MemberEntity} from "../../../model/member";

export type MemberCollectionState = MemberEntity[];

const defaultMemberCollectionState = (): MemberCollectionState => [];

export const hotelCollectionReducer = (state: MemberCollectionState = defaultMemberCollectionState(), action): MemberCollectionState => {
    switch (action.type) {
    }
    return state;
};