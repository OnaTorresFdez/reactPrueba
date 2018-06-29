import React from 'react';
import './Cesta.css';
import Row from './row/Row'

class Cesta extends React.Component {
    render() {
        const {cesta} = this.props;
        if(cesta !== undefined) {
            return(
                <div id="listadoCesta">
                <h1>Cesta</h1>
                    <table className="table" align="center" width="100%">
                        <thead>
                            <tr className="cabecera">
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cesta.map(articulo => 
                                <Row key={articulo.idArticulo} data={articulo} deleteArticulo={this.props.deleteArticulo}></Row>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }else {
            return null;
        }
    }
}

export default Cesta;