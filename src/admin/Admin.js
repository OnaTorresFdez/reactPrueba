import React from 'react';
import MenuPropio from '../menu/MenuPropio';
import './Admin.css';

export default class Admin extends React.Component {
    handleSubmit (event) {
        alert(event);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <MenuPropio></MenuPropio>
                <div className="formulario">
                    <label>
                        <a>Nombre Articulo: </a>
                        <input placeholder="Nombre Articulo" type="text"></input>
                    </label>
                    <label>
                        <a>Cantidad: </a>
                        <input placeholder="Cantidad" type="number"></input>
                    </label>
                    <label>
                        <a>Tipo de articulo:</a>
                        <select multiple={true}>
                            <option value="Comida">Comida</option>
                            <option selected value="Ordenadores">Ordenadores</option>
                            <option value="Moviles">Moviles</option>
                        </select>
                    </label>
                    <label>
                       <a> Descripción: </a>
                        <textArea placeholder="Descripción"></textArea>
                    </label>
                </div>
                <div className="formulario">
                    <label>
                        <a>Imagen:</a>
                        <input  type="file" ></input>
                    </label>
                    <label>
                        <a>Precio Antiguo:</a>
                        <input type="text" />
                    </label>
                    <label>
                        <a>Precio:</a>
                        <input type="text" />
                    </label>
                </div>
                <div className="divSubmit">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        )
    }
}
