import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './app';
import {usePromiseTracker} from "react-promise-tracker";

const LoadingIndicator = props => {
    const {promiseInProgress} = usePromiseTracker();

    return (
        promiseInProgress &&
        <h1>Hey some async call in progress ! </h1>
    );
};

ReactDOM.render(
    <>
        <App/>
        <LoadingIndicator/>
    </>,
    document.getElementById('root')
);
