import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    hello: () => 'Hello Redux'
});

export default rootReducer;