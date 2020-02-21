import * as React from 'react';
import {LoginContainer} from 'pods/login';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    centeredLayout: {
        display: "flex",
        alignItems: "center",
        height: "70vh",
        justifyContent: "center"
    }
});

export const LoginScene = () => {
    const styles = useStyles();

    return (
        <div className={styles.centeredLayout}>
            <LoginContainer/>
        </div>
    );
};
