import { useState } from "react"

import "./CampoTexto.css"

const CampoTexto = (props) => { //props son datos que se le envían a los componentes para que se comporten de una cierta forma
   
    const manejarCambio=(event)=>{
        props.actualizarValor(event.target.value);
    }
    
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto