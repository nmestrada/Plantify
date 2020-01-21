import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';
import axios from 'axios';

//const
const ADD_IMAGE = 'ADD_IMAGE';

//action
export const addPlant = (info)=> {
    return {
        type: ADD_IMAGE,
        info
    }
}
//thunk
const addPlantThunk = (input) => {
    //make a hash for each photo here, but then this goes away after each reload?
    //uris also disappear after each reload
    //this would be a temporary fix
}

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD_IMAGE:
            return [action.info, ...state]
        default:
            return state;
    }
}
export default createStore(reducer,applyMiddleware(thunkMiddleware, createLogger({collapsed:true})))