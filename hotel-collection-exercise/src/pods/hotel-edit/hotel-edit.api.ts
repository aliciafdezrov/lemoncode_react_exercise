import Axios from 'axios';
import { baseApiUrl } from 'core';

export interface HotelEntityApi {
    id: string;
    type: string;
    name: string;
    created: Date;
    modified: Date;
    address1: string;
    airportCode: string;
    amenityMask: number;
    city: string;
    confidenceRating: number;
    countryCode: string;
    deepLink: string;
    highRate: number;
    hotelId: number;
    hotelInDestination: boolean;
    hotelRating: number;
    location: {
        latitude: number;
        longitude: number;
    };
    locationDescription: string;
    lowRate: number;
    metadata: {
        path: string;
    };
    postalCode: number;
    propertyCategory: number;
    proximityDistance: number;
    proximityUnit: string;
    rateCurrencyCode: string;
    shortDescription: string;
    stateProvinceCode: string;
    thumbNailUrl: string;
    tripAdvisorRating: number;
    tripAdvisorRatingUrl: string;
}

const getHotelsUrl = `${baseApiUrl}/api/hotels`;

export const getHotelById = (id): Promise<HotelEntityApi> => Axios.get<HotelEntityApi>(`${getHotelsUrl}/${id}`).then(({ data }) => data);

export interface CityEntityApi {
    code: string;
    name: string;
}

const citiesList = [
    {"name": "Seattle", "code": "SE"},
    {"name": "Burlingame", "code": "BUR"},
    {"name": "Málaga", "code": "MA"},
    {"name": "Almeria", "code": "AL"},
    {"name": "Madrid", "code": "M"},
    {"name": "Jaén", "code": "JA"},
    {"name": "Valencia", "code": "V"},
    {"name": "Asturias", "code": "AS"},
    {"name": "Barcelona", "code": "B"},
    {"name": "Teruel", "code": "T"},
    {"name": "Huelva", "code": "HU"},
    {"name": "Cádiz", "code": "CA"},
    {"name": "Galicia", "code": "GA"},
];

export const getCitiesList = (): Promise<CityEntityApi[]> => new Promise<CityEntityApi[]>((resolve, reject) => resolve(citiesList));

