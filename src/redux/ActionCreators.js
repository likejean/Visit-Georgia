import * as ActionTypes from './ActionTypes';
import { tourData } from '../database/toursData';
import { homeData } from '../database/homeData';

export const fetchTours = () => (dispatch) => {
    
    dispatch(loadingTours(true));

    setTimeout(() => {
        dispatch(addTours(tourData));
    }, 2000);
}

export const fetchFeatures = () => (dispatch) => {
    
    dispatch(loadingFeatures(true));

    setTimeout(() => {
        dispatch(addFeatures(homeData));
    }, 2000);
}

export const closeTour = (tourId) => ({
    type: ActionTypes.CLOSE_TOUR,
    payload: tourId
});

export const showInfo = (id) => ({
    type: ActionTypes.SHOW_INFO,
    payload: id
});

export const showModal = (id) => ({
    type: ActionTypes.SHOW_MODAL,
    payload: id
});

export const loadingTours = () => ({
    type: ActionTypes.TOURS_LOADING
});

export const addTours = (tours) => ({
    type: ActionTypes.ADD_TOURS,
    payload: tours
})

export const loadingFeatures = () => ({
    type: ActionTypes.FEATURES_LOADING
});

export const addFeatures = (features) => ({
    type: ActionTypes.ADD_FEATURES,
    payload: features
})

export const getTitle = (title, id) => ({
    type: ActionTypes.GET_TITLE,
    payload: {
        caption: title,
        current: id
    }
})

