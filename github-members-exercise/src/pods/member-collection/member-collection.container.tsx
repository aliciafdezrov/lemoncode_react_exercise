import { connect } from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";
import {setOrganizationNameAction} from "./action/setOrganizationNameAction";
import {memberRequestStart} from "./action/updateMemberCollectionAction";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members,
    organizationName: state.memberState.organizationName
});

const mapDispatchToProps = dispatch => ({
    onChangeOrganizationName: (newName) => dispatch(setOrganizationNameAction(newName)),
    dispatchMemberRequestStart: (organization) => () => dispatch(memberRequestStart(organization)),
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    memberRequestStart: dispatchProps.dispatchMemberRequestStart(stateProps.organizationName),
});

export const MemberCollectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MemberCollectionComponent);