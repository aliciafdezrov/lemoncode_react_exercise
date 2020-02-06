import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import {switchRoutes} from "./core";
import {MemberCollectionScene, MemberInfoScene} from "./scenes";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route
                exact={true}
                path={[switchRoutes.root, switchRoutes.membersCollection]}
                component={MemberCollectionScene}
            />
            <Route
                path={switchRoutes.memberInfo}
                component={MemberInfoScene}
            />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
