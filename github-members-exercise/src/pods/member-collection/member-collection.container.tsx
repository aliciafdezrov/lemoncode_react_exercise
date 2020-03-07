import {connect} from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";
import {setOrganizationNameAction} from "./action/setOrganizationNameAction";
import {setRowsPerPageAction} from "./action/setRowsPerPageAction";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members,
    organizationName: state.memberState.organizationName,
    rowsPerPage: state.memberState.rowsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeOrganizationName: (newName) => dispatch(setOrganizationNameAction(newName)),
    onChangeRowsPerPage: (rowsPerPage) => dispatch(setRowsPerPageAction(rowsPerPage)),
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