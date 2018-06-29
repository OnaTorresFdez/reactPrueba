import React, { Component } from 'react';
import cestaCompra from './imagenes/cestaCompra.jpg';
import './App.css';
import Listado from './listado/Listado';
import data from './listado/listadoElementos.json';
import Cesta from './cesta/Cesta'
import IrACesta from './cesta/IrACesta'

class App extends Component {
    
    constructor() {
        super();
        this.state =  {articulos : data, cesta : []};
        this.state.cestaVisible = false;
    }
 
    deleteArticulo (cid) {
        let listaCesta = this.state.cesta;
        listaCesta = listaCesta.filter(({idArticulo})=>idArticulo !== cid);
        this.setState({cesta : listaCesta});    
    }

    addArticulo (articulo) {
        let cesta = this.state.cesta;
        let articulos = this.state.articulos;
        let nuevoElemento = articulos.filter((articulos)=>articulos.idArticulo === articulo.idArticulo)[0];
        let filtrado = cesta.filter((param) => param.idArticulo === nuevoElemento.idArticulo);
        if (filtrado.length !== 0){
            filtrado[0].cantidad++;
        }else{
            nuevoElemento.cantidad = 1;
            cesta = [...cesta, nuevoElemento];
        }
        this.setState({cesta : cesta});  
    }

    irCestaCompra(){
        let estado = this.state;
        {estado.cestaVisible ? estado.cestaVisible = false : estado.cestaVisible=true}
        this.setState(estado);
    }

    render() {
        const deleteBind = (cid)=>{this.deleteArticulo(cid)};
        const addBind = (articulo)=>{this.addArticulo(articulo)};
        const cestaCompraBind = () =>{this.irCestaCompra()};
        return ( 
            <div className = "App" >
                <IrACesta irACestaCompra={cestaCompraBind}/>
                {this.state.cestaVisible ? <div id="cestavisible"> <Listado data={this.state.articulos} addArticulo={addBind} ></Listado></div> 
                            : <div> <Listado data={this.state.articulos} addArticulo={addBind} ></Listado></div>}
                   
                {this.state.cestaVisible ? <Cesta cesta={this.state.cesta} deleteArticulo={deleteBind} ></Cesta>:null}
            </div>
        );
    }
}

export default App;