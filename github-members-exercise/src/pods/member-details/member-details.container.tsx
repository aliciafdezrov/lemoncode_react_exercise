import {connect} from "react-redux";
import {State} from "../../reducers";
import {MemberDetailsComponent} from "./member-details.component";
import * as React from "react";
import {requestMemberInfo} from "./action/requestMemberInfo";

const mapStateToProps = (state: State) => ({
    member: state.memberDetails.member
});

const mapDispatchToProps = (dispatch) => ({
    onLoadMemberInfo: (id) => dispatch(requestMemberInfo(id)),
});

export const MemberDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberDetailsComponent);