import { connect } from "react-redux";
import { MemberCollectionComponent } from "./member-collection.component";
import {State} from "../../reducers";

const mapStateToProps = (state: State) => ({
    members: state.memberState.members
});

const mapDispatchToProps = dispatch => ({
});

export const MemberCollectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberCollectionComponent);