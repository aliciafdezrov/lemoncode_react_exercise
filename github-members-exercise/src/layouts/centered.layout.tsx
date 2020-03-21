import * as React from 'react';
export const CenteredLayout: React.FunctionComponent = props => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            padding: '2rem',
            overflow: 'auto',
        }}
    >
        {props.children}
    </div>
);