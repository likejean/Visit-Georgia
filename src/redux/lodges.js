import { lodgingData } from '../database/lodgingData';

export const Lodges = (state = lodgingData, action) => {
    switch(action.type) {
        default:
            return state;
    }
}