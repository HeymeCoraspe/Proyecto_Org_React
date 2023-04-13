import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/Index";
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Botón/Index";

const Formulario=(props)=>{

        const[nombre, actualizarNombre]= useState("");
        const[puesto, actualizarPuesto]= useState("");
        const[foto, actualizarFoto]= useState("");
        const[equipo, actualizarEquipo]= useState("");

        const {registrarColaborador}=props

    const manejarEnvio= (event) =>{
        event.preventDefault() //hace que no se reinicie el navegador cuando damos click al boton
    
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}> 
            <h2>Rellena el formulario para crear el colaborador.</h2>  
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />  

            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario