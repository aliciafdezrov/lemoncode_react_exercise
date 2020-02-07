import * as React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

interface Props {
    snackBarIsOpen: boolean;
    handleCloseSnackBar: () => void;
    message: string;
    verticalAnchor?: 'top' | 'bottom';
    horizontalAnchor?: 'left' | 'center' | 'right';
    severity?: 'success' | 'info' | 'warning' | 'error';
}

export const SnackBar: React.FunctionComponent<Props> = (props: Props) => {
    const {snackBarIsOpen, handleCloseSnackBar, message, verticalAnchor, horizontalAnchor, severity} = props;

    return (
        <Snackbar open={snackBarIsOpen} onClose={handleCloseSnackBar}
                  anchorOrigin={{vertical: verticalAnchor, horizontal: horizontalAnchor}}>
            <Alert onClose={handleCloseSnackBar} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
};

SnackBar.defaultProps = {
    verticalAnchor: 'top',
    horizontalAnchor: 'center',
    severity: 'info'
};
