import React from 'react';

class TableHead extends React.Component{
    render(){
        return (
        <thead>
            {this.props.data.map((propiedad) => <th>{propiedad}</th>)}
        </thead>
        );
    }
} 

export default TableHead;