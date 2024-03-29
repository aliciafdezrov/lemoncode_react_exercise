import React from 'react';
import {MemberListContainer} from '../pods/member-list';
import {CenteredLayout} from "../layouts/centered.layout";
import ResponsiveAppBar from "../layouts/app-bar.layout";

export const MemberListScene: React.FC = () => {
    return (
        <ResponsiveAppBar>
            <CenteredLayout>
                <MemberListContainer/>
            </CenteredLayout>
        </ResponsiveAppBar>
    );
};
