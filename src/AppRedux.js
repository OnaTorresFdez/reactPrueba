import React, { Component } from 'react';
import cestaCompra from './imagenes/cestaCompra.jpg';
import './AppRedux.css';
import Listado from './listado/Listado';
import data from './listado/listadoElementos.json';
import Cesta from './cesta/Cesta';
import IrACesta from './cesta/IrACesta';
import {store, addElementoActionGeneretor, openBagActionGeneretor, deleteElementoActionGeneretor} from './actions/Action';

class AppRedux extends Component {
    
    constructor() {
        super();
        let inc = 0;
        store.subscribe(()=>{
                this.setState({x:inc++});
            }
        );
    }
 
    deleteArticulo (cid) {
           store.dispatch(deleteElementoActionGeneretor(cid));
    }

    addArticulo (articulo) {
        store.dispatch(addElementoActionGeneretor(articulo));
    }

    irCestaCompra(){
        store.dispatch(openBagActionGeneretor());
    }

    render() {
        const deleteBind = (cid)=>{this.deleteArticulo(cid)};
        const addBind = (articulo)=>{this.addArticulo(articulo)};
        const cestaCompraBind = () =>{this.irCestaCompra()};
        return ( 
            <div className = "App" >
                <IrACesta irACestaCompra={cestaCompraBind}/> LISTADO REDUX
                {store.getState().manual.cestaVisible ? 
                            <div id="cestavisible"> 
                                <Listado data={store.getState().manual.articulos} addArticulo={addBind}></Listado></div> 
                            : <div> <Listado data={store.getState().manual.articulos} addArticulo={addBind} ></Listado></div>
                }
                {store.getState().manual.cestaVisible ? 
                        <Cesta cesta={store.getState().manual.cesta} deleteArticulo={deleteBind} ></Cesta>
                        :null
                }
            </div>
        );
    }
}

export default AppRedux;