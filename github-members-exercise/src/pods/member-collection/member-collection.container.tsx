import {connect} from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";
import {setOrganizationNameAction} from "./action/setOrganizationNameAction";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members,
    organizationName: state.memberState.organizationName
});

const mapDispatchToProps = (dispatch) => ({
    onChangeOrganizationName: (newName) => dispatch(setOrganizationNameAction(newName)),
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    //memberRequestStart: dispatchProps.dispatchMemberRequestStart(stateProps.organizationName),
});

export const MemberCollectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    //mergeProps
)(MemberCollectionComponent);