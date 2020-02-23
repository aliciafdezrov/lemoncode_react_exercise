import {combineReducers} from 'redux';
import {
    memberCollectionReducer,
    MemberCollectionState
} from "./pods/member-collection/reducer/member-collection.reducer";

export interface State {
    memberState: MemberCollectionState;
}
export const reducers = combineReducers<State>({
    memberState: memberCollectionReducer
});