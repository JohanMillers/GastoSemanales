import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render() {
        const {cantidaGastoRef, nombreGastoRef} = this.props.gasto;

        
        return(
            <li className="gastos">
                <p>
                    {nombreGastoRef}
        <span className="gasto"> $ {cantidaGastoRef}</span>
                </p>
            </li>
        )
    }
}

Gasto.propsTypes = {
    gasto:PropTypes.object.isRequired
}
export default Gasto;