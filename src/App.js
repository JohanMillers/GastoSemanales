import React, { Component } from 'react';
import Header from './Componente/Header';
import FormularioGasto from './Componente/Formulario';
import './css/App.css';
import Listados from './Componente/Listados';
import ControlPresupuesto from './Componente/ControlPresupuesto';
import { validarPresupuesto } from './helper';


class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }
  componentDidMount() {
    this.obtenerpresupuesto();

  }

  obtenerpresupuesto = () => {
    let presupuesto = prompt('Cual es tu presupuesto?');
    // console.log(presupuesto);

    let resultado = validarPresupuesto(presupuesto);

    if(resultado) {
      this.setState({
        // los Objecto se separa con :
        presupuesto : presupuesto,
        restante : presupuesto
      })
    }else {
      // utilizarmos la funcion obtenerPresupuesto paraa crea un bucle y obriga colocar un presupuesto
      this.obtenerpresupuesto()
    }
  }

  // Agregar un Nuevo Gasto al state
  agregarGasto = gasto => {
    // tomar una copia del state actual
    const gastos = {...this.state.gastos};

    //agregar al gasto al objecto del state

    gastos[`gasto${Date.now()}`] = gasto;


    // restar presupuesto
    this.restarPresupuesto(gasto.cantidaGastoRef);

    //ponerlo en state
    this.setState({
      gastos
    })


  }

  // Restar del presupuesto cuando un gasto se crea 

  restarPresupuesto = cantidad => {
    //leer el gasto
    let resta = Number(cantidad);

    // tomar una copia del state actual
    let restante = this.state.restante;

    // lo restamos

    restante -=resta;

    restante = String(restante);

    // agregamos el nuevo state

    this.setState({
      restante
    })



  }


  render() {
    return (
      <div className = "App container">
      <Header 
         titulo = 'Gasto Quincenal'
      />
      <div className =" contenido-principal contenido">
        <div className=" row">
          <div className= " one-half column">
            <FormularioGasto
               agregarGasto = {this.agregarGasto}
                 
            />

          </div>
          <div className= " one-half column">
            <Listados 
               gastos = {this.state.gastos}
            
            />
            <ControlPresupuesto
             presupuesto = {this.state.presupuesto}
             restante = {this.state.restante}
            
            />
            
          </div>
        </div>
      </div>

    </div>
  );
    
  }
}

export default App;
