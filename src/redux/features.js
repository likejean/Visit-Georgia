import * as ActionTypes from './ActionTypes';

export const Features = (state = {
    features: [],
    isLoading: true},
action) => {
switch(action.type) {
    case ActionTypes.FEATURES_LOADING:
        return {...state, isLoading: true, features: []};
    
    case ActionTypes.ADD_FEATURES:            
        return {...state, isLoading: false, features: action.payload};    
     
    default:
        return state;
    }
}