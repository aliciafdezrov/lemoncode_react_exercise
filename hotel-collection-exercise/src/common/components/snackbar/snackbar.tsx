import * as React from 'react';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {IconButton} from "@material-ui/core";
import Close from '@material-ui/icons/Close';
import Snackbar from "@material-ui/core/Snackbar";

interface Props {
    snackBarIsOpen: boolean;
    handleCloseSnackBar: () => void;
    message: string;
    verticalAnchor?: 'top' | 'bottom';
    horizontalAnchor?: 'left' | 'center' | 'right';
    backgroundColor?: string;
}

export const SnackBar: React.FunctionComponent<Props> = (props: Props) => {
    const {snackBarIsOpen, handleCloseSnackBar, message, verticalAnchor, horizontalAnchor, backgroundColor} = props;

    return (
        <Snackbar anchorOrigin={{vertical: verticalAnchor, horizontal: horizontalAnchor}}
                  open={snackBarIsOpen}
                  onClose={handleCloseSnackBar}>
            <SnackbarContent
                style={{
                    backgroundColor: backgroundColor
                }}
                message="Invalid credentials, use admin/test"
                action={
                    <>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
                            <Close/>
                        </IconButton>
                    </>
                }
            />
        </Snackbar>
    );
};

SnackBar.defaultProps = {
    verticalAnchor: 'top',
    horizontalAnchor: 'center',
    backgroundColor: '#272c34'
};
