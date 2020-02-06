import * as React from 'react';
import {MemberCardComponent} from "components";
import {CenteredLayout} from "layouts";

export const MemberInfoScene = () => (
    <CenteredLayout>
        <h1>Member details</h1>
        <MemberCardComponent/>
    </CenteredLayout>
);