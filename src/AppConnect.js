import React, { Component } from 'react';
import cestaCompra from './imagenes/cestaCompra.jpg';
import './AppRedux.css';
import Listado from './listado/Listado';
import data from './listado/listadoElementos.json';
import Cesta from './cesta/Cesta';
import IrACesta from './cesta/IrACesta';
import {store, addElementoActionGeneretor, openBagActionGeneretor, deleteElementoActionGeneretor} from './actions/Action';
import {connect} from 'react-redux'
import MenuPropio from './menu/MenuPropio'

class AppConnect extends Component {
    
    constructor() {
        super();
    }
 
    render() {

        const deleteBind = (cid)=>{this.props.deleteElementoActionGeneretor(cid)};
        const addBind = (articulo)=>{this.props.addElementoActionGeneretor(articulo);};
        const cestaCompraBind = () =>{this.props.openBagActionGeneretor();};
        console.log(this.props) 
        let {cesta} = this.props.estado;
        return (
            <div className = "App" >
                <MenuPropio></MenuPropio>
                <IrACesta irACestaCompra={cestaCompraBind}/> LISTADO CONNECT
                {this.props.estado.cestaVisible ? 
                            <div id="cestavisible"> 
                                <Listado data={this.props.estado.articulos} addArticulo={addBind}></Listado></div> 
                            : <div> <Listado data={this.props.estado.articulos} addArticulo={addBind} ></Listado></div>
                }
                {this.props.estado.cestaVisible ? 
                        <Cesta cesta={this.props.estado.cesta} deleteArticulo={deleteBind} ></Cesta>
                        :null
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        estado: state.connect
    }
}

const alternate = {
    addElementoActionGeneretor, openBagActionGeneretor, deleteElementoActionGeneretor
}

const mapDispatchToProps = (dispatch) => {
    return {
        openBagActionGeneretor: () => {
            dispatch(openBagActionGeneretor());
        },
        addElementoActionGeneretor: (articulo) => {
            dispatch(addElementoActionGeneretor(articulo));
        },
        deleteElementoActionGeneretor: (articulo) => {
            dispatch(deleteElementoActionGeneretor(articulo));
        }
    }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(AppConnect);