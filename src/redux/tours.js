import * as ActionTypes from './ActionTypes';

export const Tours = (state = {
        tours: [],
        isLoading: true,
        toggleInfo: {},
        toggleModal: {}},
    action) => {
    switch(action.type) {
        case ActionTypes.TOURS_LOADING:
            return {...state, isLoading: true, tours: []};
        
        case ActionTypes.ADD_TOURS:            
            return {...state, isLoading: false, tours: action.payload};     
        
        case ActionTypes.CLOSE_TOUR:            
            return {...state, isLoading: false, tours: state.tours.filter(tour => tour.id !== action.payload)};
        
        
        case ActionTypes.SHOW_INFO:           
            const nextToggleInfo = { ...state.toggleInfo};
            Object.keys(nextToggleInfo).forEach(key => {
                nextToggleInfo[key] = false;
            }); 
            nextToggleInfo[action.payload] = !state.toggleInfo[action.payload];
            return {...state, isLoading: false, toggleInfo: nextToggleInfo}
        
        
        case ActionTypes.SHOW_MODAL:
            const nextToggleModal = { ...state.toggleModal};
            Object.keys(nextToggleModal).forEach(key => {
                nextToggleModal[key] = false;
            }); 
            nextToggleModal[action.payload] = !state.toggleModal[action.payload];
            return {...state, isLoading: false, toggleModal: nextToggleModal}
        
        default:
            return state;
    }
}