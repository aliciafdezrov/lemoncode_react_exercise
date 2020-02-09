import * as React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Rating} from "@material-ui/lab";
import MenuItem from "@material-ui/core/MenuItem";
import {HotelEntityVm} from "../hotel-collection/hotel-collection.vm";

const classes = require('./hotel-edit.styles.scss');

interface Props {
    hotelId: string;
    mockHotel: HotelEntityVm;
    editHotel: (hotel: HotelEntityVm, prop: string, value: any) => void;

}

export const HotelEditComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {hotelId, mockHotel, editHotel} = props;

    const editHotelInfo = (prop, value) => {
      editHotel(mockHotel, prop, value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Name</InputLabel>
                </div>
                <TextField fullWidth
                           value={mockHotel.name}
                           id="name"
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
                           id="picture"/>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.inputLabel}>
                    <InputLabel>Rating</InputLabel>
                </div>
                <Rating
                    id="hotel-rating"
                    name="rating"
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
                           id="description"
                           rows="4"/>
            </div>

            <div className={classes.rowContainer}>
                <Button variant="contained" color="primary" fullWidth onClick={() => console.log(mockHotel)}>Save</Button>
            </div>
        </div>
    );
};
