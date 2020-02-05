import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import {switchRoutes} from "./core";
import {MembersTableComponent} from "./components/membersTable";
import {MemberCardComponent} from "./components/memberCard";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route
                exact={true}
                path={[switchRoutes.root, switchRoutes.membersCollection]}
                component={MembersTableComponent}
            />
            <Route
                path={switchRoutes.memberInfo}
                component={MemberCardComponent}
            />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
