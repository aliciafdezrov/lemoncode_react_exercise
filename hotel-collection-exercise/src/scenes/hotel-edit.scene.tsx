import * as React from 'react';
import {AppLayout} from 'layouts';
import {useParams} from 'react-router-dom';

export const HotelEditScene = () => {
    const params: any = useParams();

    return (
        <AppLayout>
            <h1>Hotel Edit: ${params.id}</h1>
        </AppLayout>
    );
};
