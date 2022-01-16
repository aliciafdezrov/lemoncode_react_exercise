import React from 'react';
import {MemberListContainer} from '../pods/member-list';
import {CenteredLayout} from "../layouts/centered.layout";

export const MemberListScene: React.FC = () => {
    return (
        <CenteredLayout>
            <MemberListContainer/>
        </CenteredLayout>
    );
};
