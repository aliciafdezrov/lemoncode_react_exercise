import {combineReducers} from 'redux';
import {
    memberCollectionReducer,
    MemberCollectionState
} from "./pods/member-collection/reducer/member-collection.reducer";
import {memberDetailsReducer, MemberDetailsState} from "./pods/member-details/reducer/member-details.reducer";

export interface State {
    memberState: MemberCollectionState;
    memberDetails: MemberDetailsState;
}
export const reducers = combineReducers<State>({
    memberState: memberCollectionReducer,
    memberDetails: memberDetailsReducer
});