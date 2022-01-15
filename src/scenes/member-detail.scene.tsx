import React from 'react';
import {useParams} from "react-router-dom";
import {MemberDetailContainer} from '../pods/member-detail';

export const MemberDetailScene: React.FC = () => {
    const {id} = useParams();

    return (
        <MemberDetailContainer id={id}/>
    );
};
