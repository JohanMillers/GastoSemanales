import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';
class Listados extends Component {
    render(){
        return(
            <div className="gastos-realizados"> 
            <h2> Listados de gastos </h2> 
            {Object.keys( this.props.gastos ).map (key => ( 
                <Gasto
                key={key}
                gasto={this.props.gastos[key]}
                />

            ) ) }
            
        
            

            </div>
        )
    }
}

Listados.propTypes = {
    gastos : PropTypes.object.isRequired
}

export default Listados;