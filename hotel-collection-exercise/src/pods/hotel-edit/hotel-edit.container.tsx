import * as React from 'react';
import {HotelEditComponent} from "./hotel-edit.component";

interface Props {
    hotelId: string;
}

export const HotelEditContainer = (props: Props) => {
    const {hotelId} = props;
    return <HotelEditComponent hotelId={hotelId}/>;
};
