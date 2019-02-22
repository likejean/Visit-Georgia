import * as ActionTypes from './ActionTypes';

export const Features = (state = {
    features: [],
    isLoading: true,
    caption: '',
    current: 0},
action) => {
switch(action.type) {
    case ActionTypes.FEATURES_LOADING:
        return {...state, isLoading: true, features: []};
    
    case ActionTypes.ADD_FEATURES:            
        return {...state, isLoading: false, features: action.payload};

    case ActionTypes.GET_TITLE:  
        console.log("TITLE",action.payload.caption) 
        console.log("CURR",action.payload.current)          
        return {...state, isLoading: false, caption: action.payload.caption, current: action.payload.current};

    default:
        return state;
    }
}