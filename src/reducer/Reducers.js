import {createStore, combineReducers} from 'redux';
import data from '../listado/listadoElementos.json';

const reducerManual = function (state = {articulos : data, cesta : [], cestaVisible:false}, action){
    switch (action.type){
        case "ADD_ELEMENT":
                return addElementoReducer(state, action.articulo);
        case "OPEN_BAG":
                return  openBagReducer(state);
        case "DELETE_ELEMENT":
                return  deleteElementReducer(state, action.idArticulo);
        default:
            return state;
    }
} 

const reducerConnect = function (state = {articulos : data, cesta : [], cestaVisible:false}, action){
    switch (action.type){
        case "ADD_ELEMENT":
                return addElementoReducer(state, action.articulo);
        case "OPEN_BAG":
                return  openBagReducer(state);
        case "DELETE_ELEMENT":
                return  deleteElementReducer(state, action.idArticulo);
        default:
            return state;
    }
}

export const reducer = combineReducers({
    manual : reducerManual,
    connect: reducerConnect,
});

export const addElementoReducer = function (state, articulo){
    let cesta =state.cesta;
    let articulos =state.articulos;
    let nuevoElemento = articulos.filter((articulos)=>articulos.idArticulo === articulo.idArticulo)[0];
    let filtrado = cesta.filter((param) => param.idArticulo === nuevoElemento.idArticulo);
    console.log(filtrado[0]);
    if (filtrado.length !== 0){
        filtrado[0].cantidad++;
    }else{
        nuevoElemento.cantidad = 1;
        cesta = [...cesta, nuevoElemento];
    }
    return {...state, cesta}
}

export const openBagReducer = function (state) {
    let estado = state;
    {estado.cestaVisible ? estado.cestaVisible = false : estado.cestaVisible=true}
    return {...state, cestaVisible:estado.cestaVisible}
}

export const deleteElementReducer = function(state, cid) {
    let listaCesta = state.cesta;
    listaCesta = listaCesta.filter(({idArticulo})=>idArticulo !== cid);
    return {...state, cesta : listaCesta}; 
}