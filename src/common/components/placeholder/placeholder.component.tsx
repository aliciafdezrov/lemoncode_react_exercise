import React from "react";
import Paper from "@mui/material/Paper";
import * as classes from './placeholder.component.styles';
import Typography from "@mui/material/Typography";

interface Props {
    text: string;
}

export const Placeholder: React.FC<Props> = (props) => {
    const {text} = props;

    return (
        <Paper elevation={1} className={classes.root}>
            <Typography align="center">{text}</Typography>
        </Paper>
    );
};
