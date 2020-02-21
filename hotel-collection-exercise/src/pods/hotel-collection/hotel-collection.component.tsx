import * as React from 'react';
import {HotelEntityVm} from './hotel-collection.vm';
import {HotelCard} from './components/hotel-card.component';

const classes = require("./hotel-collection.styles.scss");

interface Props {
    hotelCollection: HotelEntityVm[];
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = props => {
    const {hotelCollection} = props;

    return (
        <div className={classes.mainSection}>
            <div className={classes.gridSection}>
                {hotelCollection.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel}/>
                ))}
            </div>
        </div>
    );
};
