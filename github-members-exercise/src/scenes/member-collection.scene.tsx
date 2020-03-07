import * as React from 'react';
import {CenteredLayout} from "layouts";
import {MemberCollectionContainer} from "../pods/member-collection";
import {CustomHeaderComponent} from "../components/customHeader";

export const MemberCollectionScene = () => (
    <>
        <CustomHeaderComponent text={'Members Page'}/>
        <CenteredLayout>
            <MemberCollectionContainer/>
        </CenteredLayout>
    </>
);