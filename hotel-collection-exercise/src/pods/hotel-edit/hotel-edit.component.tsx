import * as React from 'react';

interface Props {
    hotelId: string;
}

export const HotelEditComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {hotelId} = props;

    return (
        <div>
            <h1>HOTEL EDIIITTT: ${hotelId}</h1>
        </div>
    );
};
