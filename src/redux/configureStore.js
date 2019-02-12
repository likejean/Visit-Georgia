import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Tours } from './tours';
import { Activities } from './activities';
import { Lodges } from './lodges';
import { Features } from './features';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tours: Tours,
            activities: Activities,
            lodges: Lodges,
            features: Features
        }),
        applyMiddleware(thunk, logger)
        
    );
    return store;
} 
