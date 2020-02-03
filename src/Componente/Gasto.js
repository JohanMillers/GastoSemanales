import React ,{Component} from 'react';

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
export default Gasto;