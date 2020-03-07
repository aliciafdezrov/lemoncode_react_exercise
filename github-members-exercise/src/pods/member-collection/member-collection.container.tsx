import {connect} from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";
import {setOrganizationNameAction} from "./action/setOrganizationNameAction";
import {setRowsPerPageAction} from "./action/setRowsPerPageAction";
import {setPageAction} from "./action/setPageAction";
import {requestLoadMembersWithPaging} from "./action/requestLoadMembersWithPaging";
import {requestLoadTotalMembers} from "./action/requestLoadTotalMembers";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members,
    organizationName: state.memberState.organizationName,
    rowsPerPage: state.memberState.rowsPerPage,
    page: state.memberState.page,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeOrganizationName: (newName) => dispatch(setOrganizationNameAction(newName)),
    onChangeRowsPerPage: (rowsPerPage) => dispatch(setRowsPerPageAction(rowsPerPage)),
    onChangePage: (page) => dispatch(setPageAction(page)),
    dispatchRequestLoadMembersWithPaging: (organizationName, page, rowsPerPage) => () => dispatch(requestLoadMembersWithPaging(organizationName, page, rowsPerPage)),
    dispatchInitialLoad: (organizationName, page, rowsPerPage) => () => {
        dispatch(requestLoadTotalMembers(organizationName));
        dispatch(requestLoadMembersWithPaging(organizationName, page, rowsPerPage));
    },
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    onLoadMembers: dispatchProps.dispatchRequestLoadMembersWithPaging(stateProps.organizationName, stateProps.page+1, stateProps.rowsPerPage),
    onLoadComponent: dispatchProps.dispatchInitialLoad(stateProps.organizationName, stateProps.page+1, stateProps.rowsPerPage)
});

export const MemberCollectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MemberCollectionComponent);