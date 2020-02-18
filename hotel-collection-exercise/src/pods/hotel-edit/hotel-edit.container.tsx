import * as React from 'react';
import {HotelEditComponent} from "./hotel-edit.component";
import {CityEntityApi, getCitiesList, getHotelById} from "./hotel-edit.api";
import {HotelEntityVm} from "./hotel-edit.vm";
import {mapFromApiToVm} from "./hotel-edit.mapper";

interface Props {
    hotelId: string;
}

export const createMockedHotel = (): HotelEntityVm => ({
    picture: "",
    name: "",
    description: "",
    rating: 0,
    city: "",
    id: "",
});

export const HotelEditContainer = (props: Props) => {
    const {hotelId} = props;
    const [initialHotel, setHotel] = React.useState<HotelEntityVm>(createMockedHotel());
    const [citiesList, setCitiesList] = React.useState<CityEntityApi[]>([]);

    const loadHotel = (hotelId) => {
        getHotelById(hotelId).then(result =>
            setHotel(mapFromApiToVm(result))
        );
    };

    const loadCitiesList = () => {
        return getCitiesList().then(result =>
            setCitiesList(result)
        );
    };

    React.useEffect(() => {
        loadHotel(hotelId);
    }, [hotelId]);

    React.useEffect(() => {
        loadCitiesList();
    }, []);

    const editHotel = (hotel) => {
        console.log(hotel)
    };

    return <HotelEditComponent hotelId={hotelId} initialHotel={initialHotel} editHotel={editHotel} citiesList={citiesList}/>;
};
