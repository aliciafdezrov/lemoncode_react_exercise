import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import {switchRoutes} from "./core";
import {MemberCollectionScene, MemberInfoScene} from "./scenes";
import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./reducers";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
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
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
