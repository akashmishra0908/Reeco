import {applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk'; 
import { reducer as reecoReducer} from "./reducer"

const rootReducer = combineReducers({
    reecoReducer
  
  });
  
export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

