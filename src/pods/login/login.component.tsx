import React from "react";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import * as classes from './login.component.styles';

interface Props {
    onNavigate: () => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const {onNavigate} = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (username === "admin" && password === "test") {
            onNavigate();
        } else {
            setOpen(true);
        }
    };

    return (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography gutterBottom variant="h5">Log in:</Typography>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="username">Username: </InputLabel>
                        <Input id="username" value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="passsword">Password: </InputLabel>
                        <Input id="password" type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleNavigation}
                    >
                        Sign in
                    </Button>
                </Paper>
            </div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="info" onClose={() => setOpen(false)}>
                <AlertTitle>Info</AlertTitle>
                User / password not valid, psst... <strong>admin / test</strong>
            </Alert>
            </Snackbar>
        </>
    );
};
