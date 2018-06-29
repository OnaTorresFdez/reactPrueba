import React from 'react';
import '../Cesta.css';
import papelera from '../../imagenes/papelera.jpg';
import cestaCompra from '../../imagenes/cestaCompra.jpg';

class Row extends React.Component {
    render () {
        const {data : articulo, deleteArticulo, addArticulo} = this.props;
        if(articulo !== undefined) {
            return (
                <tr>
                    <td>{articulo.title}</td>
                    <td>{articulo.detalle}</td>
                    {this.props.compra === true ? (<td><img width="50px" src={require('../../imagenes/' + articulo.pic)}/></td>): null}
                    <td>
                        {this.props.compra === true ? (<a className="preciosAntiguos">{articulo.precioAntiguio}</a>) : null}
                        <a className="precios">{articulo.precio}</a>
                    </td>
                    {this.props.compra ===true ? null :<td><a>{articulo.cantidad}</a></td>}
                    {this.props.compra === true ? (
                        <td> <img id="cesta" onClick = {()=>addArticulo(articulo)} src={cestaCompra}/></td>)
                    :  <td> <img id="papelera" onClick = {()=>deleteArticulo(articulo.idArticulo)} src={papelera}/> </td>}

                </tr>
            )
        }else {
            return null;
        }
    }
}

export default Row;