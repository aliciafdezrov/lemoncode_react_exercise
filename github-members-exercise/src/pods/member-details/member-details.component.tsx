import * as React from "react";
import {MemberCardComponent} from "./components/memberCard/memberCard";
import {MemberEntity} from "../../model/member";
import {useEffect} from "react";
import {useParams} from 'react-router-dom';

interface Props {
    member: MemberEntity
}

interface DispatchProps {
    onLoadMemberInfo: (id) => void;
}

export const MemberDetailsComponent = (props: Props & DispatchProps) => {
    const {member, onLoadMemberInfo} = props;
    const params = useParams();

    useEffect(() => {
        onLoadMemberInfo(params.id);
    }, []);

    return (
        <MemberCardComponent memberInfo={member}/>
    );
};