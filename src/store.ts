import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth-reducer';


export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer
    })
})