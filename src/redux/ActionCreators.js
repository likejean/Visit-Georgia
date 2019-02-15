import * as ActionTypes from './ActionTypes';
import { tourData } from '../database/toursData';

export const fetchTours = () => (dispatch) => {
    
    dispatch(loadingTours(true));

    setTimeout(() => {
        dispatch(addTours(tourData));
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