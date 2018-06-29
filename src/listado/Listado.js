import React from 'react';
import './Listado.css';
//import Cesta from '../cesta/Cesta'
import Row from '../cesta/row/Row'
//import TableHead from '../TableHead'

class Listado extends React.Component {
    
    render(){
        const {data : articulos, addArticulo, deleteArticulo} = this.props;
        const listadoCompra = true;
        if(articulos !== undefined) {
            return(
                <div align="center">
                    <h1>Listado</h1>
                    <table className="table" align="center" width="100%">
                        < thead>
                            <tr className="cabecera">
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Imagen</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        {/* <TableHead data={Object.keys(articulos[0])}/>  */}
                        <tbody>
                        {articulos
                            .map(articulo => 
                                <Row key={articulo.idArticulo} data={articulo} compra={listadoCompra} 
                                addArticulo={addArticulo} deleteArticulo={deleteArticulo}></Row>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }else {
            return null;
        }
        {/* <div>
            <Row data={this.props.data} ></Row>
            <Cesta deleteArticulo={this.props.deleteArticulo}></Cesta>
        </div> */}
    }
}

export default Listado;