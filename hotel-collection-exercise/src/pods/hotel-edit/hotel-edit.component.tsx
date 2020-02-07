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

    const editHotelInfo = (propId, newValue) => {
      console.log(propId, newValue)
    };

    return (
        <div className={classes.container}>
            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Name</InputLabel>
                </div>
                <TextField fullWidth
                           value={mockHotel.name}
                           id="hotel-name"
                           onChange={(event) => editHotelInfo(event.target.id, event.target.value)}/>
            </div>

            <div className={classes.rowContainer}>
                <img src={mockHotel.picture}
                     alt={`Image for the hotel with id: ${hotelId}`}/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Picture</InputLabel>
                </div>
                <TextField fullWidth
                           value={mockHotel.picture}
                           onChange={(event) => editHotelInfo(event.target.id, event.target.value)}
                           id="hotel-picture"/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Rating</InputLabel>
                </div>
                <Rating
                    id="hotel-rating"
                    name="hotel-rating"
                    value={mockHotel.rating}
                    onChange={(event: any, value) => editHotelInfo(event.target.name, value)}
                />

                <div className={classes.inputLabel}>
                    <InputLabel>City</InputLabel>
                </div>
                <Select
                    labelId="city-selector"
                    name="city-selector-hotel"
                    onChange={(event) => editHotelInfo(event.target.name, event.target.value)}
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
                           onChange={(event) => editHotelInfo(event.target.id, event.target.value)}
                           id="hotel-description"
                           rows="4"/>
            </div>

            <div className={classes.rowContainer}>
                <Button variant="contained" color="primary" fullWidth>Save</Button>
            </div>
        </div>
    );
};
