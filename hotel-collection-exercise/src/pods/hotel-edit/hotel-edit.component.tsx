import * as React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Rating} from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import {HotelEntityVm} from "../hotel-collection/hotel-collection.vm";

const classes = require('./hotel-edit.styles.scss');
const mockHotel: HotelEntityVm = {
    picture: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    name: "Hotel BellaVista",
    description: "Beautiful hotel located in Málaga",
    rating: 4,
    address: "Málaga",
    id: "id-mocked",
};

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
                <TextField fullWidth value={mockHotel.name}/>
            </div>

            <div className={classes.rowContainer}>
                <img src={mockHotel.picture}
                     alt={`Image for the hotel with id: ${hotelId}`}/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Picture</InputLabel>
                </div>
                <TextField fullWidth value={mockHotel.picture}/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Rating</InputLabel>
                </div>
                <Rating
                    name="hotel-rating"
                    value={mockHotel.rating}
                />

                <div className={classes.inputLabel}>
                    <InputLabel>City</InputLabel>
                </div>
                <Select
                    labelId="city-selector"
                    id="city-selector-hotel-edit-component"
                    value={0}
                >
                    <MenuItem value={0}>Málaga</MenuItem>
                    <MenuItem value={1}>Granada</MenuItem>
                    <MenuItem value={2}>Almería</MenuItem>
                </Select>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Description</InputLabel>
                </div>
                <TextField fullWidth
                           value={mockHotel.description}
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
