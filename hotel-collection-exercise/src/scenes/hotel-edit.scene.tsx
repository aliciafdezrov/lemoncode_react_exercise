import * as React from 'react';
import {AppLayout} from 'layouts';
import {useParams} from 'react-router-dom';
import {HotelEditContainer} from "../pods/hotel-edit";

export const HotelEditScene = () => {
    const params: any = useParams();

    return (
        <AppLayout>
            <HotelEditContainer hotelId={params.id}/>
        </AppLayout>
    );
};
