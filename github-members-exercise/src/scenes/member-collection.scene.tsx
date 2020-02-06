import * as React from 'react';
import {MembersTableComponent} from "components";
import {CenteredLayout} from "layouts";

export const MemberCollectionScene = () => (
    <CenteredLayout>
        <h1> Members Page</h1>
        <MembersTableComponent/>
    </CenteredLayout>
);