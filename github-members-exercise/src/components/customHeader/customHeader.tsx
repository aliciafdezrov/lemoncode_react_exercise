import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#03a9fc',
        color: theme.palette.common.white,

    }
}));

interface Props {
    text: string;
}

export const CustomHeaderComponent = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    {props.text}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};