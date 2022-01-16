import React from 'react';
import {useParams} from "react-router-dom";
import {MemberDetailContainer} from '../pods/member-detail';
import ResponsiveAppBar from "../layouts/app-bar.layout";

export const MemberDetailScene: React.FC = () => {
    const {id} = useParams();

    return (
        <ResponsiveAppBar>
            <MemberDetailContainer id={id}/>
        </ResponsiveAppBar>
    );
};
