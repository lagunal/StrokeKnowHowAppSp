import { createStore, combineReducers } from 'redux';

import reducer from './reducers/toolkits';

const rootReducer = combineReducers({
    toolkits: reducer, 
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;

