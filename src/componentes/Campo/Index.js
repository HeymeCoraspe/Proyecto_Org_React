//import { useState } from "react"
import "./Campo.css"

const Campo = (props) => { //props son datos que se le envían a los componentes para que se comporten de una cierta forma
   
    //dstructuración
    const{type="text"}=props

    const manejarCambio=(event)=>{
        props.actualizarValor(event.target.value);
    }
    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo