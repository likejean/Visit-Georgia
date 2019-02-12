import { activitiesData } from '../database/activitiesData';

export const Activities = (state = activitiesData, action) => {
    switch(action.type) {
        default:
            return state;
    }
}