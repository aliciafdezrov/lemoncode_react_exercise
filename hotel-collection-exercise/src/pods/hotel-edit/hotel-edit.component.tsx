import * as React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {createStyles, Select, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Rating} from "@material-ui/lab";
import makeStyles from "@material-ui/core/styles/makeStyles";

const classes = require('./hotel-edit.styles.scss');

interface Props {
    hotelId: string;
}

export const HotelEditComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {hotelId} = props;

    return (
        <div className={classes.container}>
            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Name</InputLabel>
                </div>
                <TextField fullWidth/>
            </div>

            <div className={classes.rowContainer}>
                <img src={"https://material-ui.com/static/images/grid-list/breakfast.jpg"}
                     alt={`Image for the hotel with id: ${hotelId}`}/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Picture</InputLabel>
                </div>
                <TextField fullWidth/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Rating</InputLabel>
                </div>
                <Rating
                    name="hotel-rating"
                />

                <div className={classes.inputLabel}>
                    <InputLabel>City</InputLabel>
                </div>
                <Select value={"Seattle"}/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Description</InputLabel>
                </div>
                <TextField fullWidth
                           variant="outlined"
                           multiline
                           rows="4"/>
            </div>

            <div className={classes.rowContainer}>
                <Button variant="contained" color="primary" fullWidth>Save</Button>
            </div>
        </div>
    );
};
