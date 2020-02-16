import * as React from 'react';
import {HotelEditComponent} from "./hotel-edit.component";
import {HotelEntityVm} from "../hotel-collection/hotel-collection.vm";

interface Props {
    hotelId: string;
}

export const createMockedHotel = (): HotelEntityVm => ({
    picture: "http://localhost:3000/thumbnails/50947_264_t.jpg",
    name: "Hotel BellaVista",
    description: "Beautiful hotel located in Málaga",
    rating: 4,
    address: "Málaga",
    id: "id-mocked",
});

export const HotelEditContainer = (props: Props) => {
    const {hotelId} = props;

    const [initialHotel, setHotel] = React.useState<HotelEntityVm>(createMockedHotel());

    const editHotel = (hotel, propId, newValue) => {
        let editedHotel = {...hotel};
        editedHotel[propId] = newValue;
       setHotel(editedHotel)
    };

    return <HotelEditComponent hotelId={hotelId} initialHotel={initialHotel} editHotel={editHotel}/>;
};
