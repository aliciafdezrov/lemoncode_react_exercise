import * as React from 'react';
import {CenteredLayout} from "layouts";
import {CustomHeaderComponent} from "../components/customHeader";
import {MemberDetailsContainer} from "../pods/member-details/member-details.container";

export const MemberInfoScene = () => (
    <>
        <CustomHeaderComponent text='Member details'/>
        <CenteredLayout>
            <MemberDetailsContainer/>
        </CenteredLayout>
    </>
);