import * as React from 'react';
import {HotelEditComponent} from "./hotel-edit.component";
import {HotelEntityVm} from "../hotel-collection/hotel-collection.vm";
import {mapFromApiToVm} from "../hotel-collection/hotel-collection.mapper";
import {getHotelById} from "./hotel-edit.api";

interface Props {
    hotelId: string;
}

export const createMockedHotel = (): HotelEntityVm => ({
    picture: "",
    name: "",
    description: "",
    rating: 0,
    address: "",
    id: "",
});

export const HotelEditContainer = (props: Props) => {
    const {hotelId} = props;

    const [initialHotel, setHotel] = React.useState<HotelEntityVm>(createMockedHotel());

    const loadHotel = () => {
        getHotelById(hotelId).then(result =>
            setHotel(mapFromApiToVm(result))
        );
    };

    React.useEffect(() => {
        loadHotel();
    }, [hotelId]);

    const editHotel = (hotel, propId, newValue) => {
        let editedHotel = {...hotel};
        editedHotel[propId] = newValue;
       setHotel(editedHotel)
    };

    return <HotelEditComponent hotelId={hotelId} initialHotel={initialHotel} editHotel={editHotel}/>;
};
