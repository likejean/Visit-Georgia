import { tourData } from '../database/toursData';
import { lodgingData } from '../database/lodgingData';
import { homeData } from '../database/homeData';
import { activities_array } from '../database/activities_array';

export const initialState = {
    tours: tourData,
    lodges: lodgingData,
    features: homeData,
    activities: activities_array
};

export const Reducer = (state = initialState, action) => {
    return state;
};