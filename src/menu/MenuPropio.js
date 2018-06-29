import React, {Component} from 'react';
import './menu.css'

export default class MenuPropio extends React.Component{
    render(){
        return (
            <div className ="miMenu">
            <ul >
                <li><a href={"/AppConnect"}>Listado</a></li>
                <li><a href={"/admin"}>Admin</a></li>
            </ul>
        </div>
        )
    }
}