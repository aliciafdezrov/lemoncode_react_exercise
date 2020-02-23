import * as React from 'react';
import {CenteredLayout} from "layouts";
import {MemberCollectionContainer} from "pods";

export const MemberCollectionScene = () => (
    <CenteredLayout>
        <h1> Members Page</h1>
        <MemberCollectionContainer/>
    </CenteredLayout>
);