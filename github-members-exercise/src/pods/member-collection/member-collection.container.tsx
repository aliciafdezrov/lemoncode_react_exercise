import { connect } from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";
import {setOrganizationNameAction} from "./action/setOrganizationNameAction";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members,
    organizationName: state.memberState.organizationName
});

const mapDispatchToProps = dispatch => ({
    onChangeOrganizationName: (newName) => dispatch(setOrganizationNameAction(newName))
});

export const MemberCollectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberCollectionComponent);