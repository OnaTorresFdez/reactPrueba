import React from 'react';
import cestaCompra from '../imagenes/cestaCompra.jpg';

export default class IrACesta extends React.Component{
    render(){
        return (
            <div className="cesta">
                <img  alt="50px" onClick = {()=>this.props.irACestaCompra()}  src={cestaCompra} />
            </div>
        )
    };
}
