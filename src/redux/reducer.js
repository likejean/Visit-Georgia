import { tourData } from '../database/toursData';
import { lodgingData } from '../database/lodgingData';
import { homeData } from '../database/homeData';
import { activitiesData } from '../database/activitiesData';

export const initialState = {
    tours: tourData,
    lodging: lodgingData,
    features: homeData,
    activities: activitiesData
};

export const Reducer = (state = initialState, action) => {
    return state;
};