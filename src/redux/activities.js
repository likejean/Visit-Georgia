import { activities_array } from '../database/activities_array';

export const Activities = (state = activities_array, action) => {
    switch(action.type) {
        default:
            return state;
    }
}