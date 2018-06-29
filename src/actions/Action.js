import {createStore, combineReducers} from 'redux';
import {reducer} from '../reducer/Reducers';
import { connect } from 'react-redux';

export const addElementoActionGeneretor = function(articulo){
    return {type:"ADD_ELEMENT", articulo};
}

export const openBagActionGeneretor = function(){
    return {type:"OPEN_BAG"};
}

export const deleteElementoActionGeneretor = function(idArticulo){
    return {type:"DELETE_ELEMENT", idArticulo};
}


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());