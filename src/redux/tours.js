import * as ActionTypes from './ActionTypes';

export const Tours = (state = {
        tours: [],
        isLoading: true,
        toggleInfo: false,
        toggleModal: false},
    action) => {
    switch(action.type) {
        case ActionTypes.TOURS_LOADING:
            return {...state, isLoading: true, tours: []};
        
        case ActionTypes.ADD_TOURS:            
            return {...state, isLoading: false, tours: action.payload};     
        
        case ActionTypes.CLOSE_TOUR:            
            return {...state, isLoading: false, tours: state.tours.filter(tour => tour.id !== action.payload)};
        
        
        case ActionTypes.SHOW_INFO:            
            return {...state, isLoading: false, toggleInfo: !state.toggleInfo}                

        case ActionTypes.SHOW_MODAL:
            return {...state, isLoading: false, toggleModal: !state.toggleModal};
        
        default:
            return state;
    }
}