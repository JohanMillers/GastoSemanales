import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioGasto extends Component {

    //refs para los campo del formulario
    nombreGastoRef = React.createRef();
    cantidaGastoRef = React.createRef();

    crearGasto = (e) => {
        //Prevenir el default
        e.preventDefault();

        // Crear el objecto
        const gasto = {
            nombreGastoRef : this.nombreGastoRef.current.value,
            cantidaGastoRef : this.cantidaGastoRef.current.value
        }
        // console.log(gasto);

        //Agreagar y envialos por props
        this.props.agregarGasto(gasto);
        

        // resestar el formulario 
        e.currentTarget.reset();
    }


    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gasto aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} className="u-full-width"
                    type="text" placeholder="Ej. Transporte"
                    />

                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidaGastoRef} className="u-full-width" 
                    type="text" placeholder="Ej. 300"/>
                </div>

                <input className="button-primary 
                u-full-width" type="submit" value="Agregar"
                 />
            </form>
        )
    }
}

FormularioGasto.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}


export default FormularioGasto;