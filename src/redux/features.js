import { homeData } from '../database/homeData';

export const Features = (state = homeData, action) => {
    switch(action.type) {
        default:
            return state;
    }
}