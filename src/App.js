import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/Index';
import Equipo from './componentes/Equipo/Index';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar]= useState(true);
  
  const[colaboradores,actualizarColaboradores]=useState([{
    equipo:"Front End",
    foto:"https://github.com/HeymeCoraspe.png",
    nombre:"Heyme Coraspe",
    puesto:"Estudiante",
    }]);

    //ternario--> condicion ?= verdadero semuestra : si  no nosemuestra
    const cambiarMostrar=()=>{
      actualizarMostrar(!mostrarFormulario)
    }

    const registrarColaborador = (colaborador) => {
      console.log("Nuevo colaborador", colaborador);
      //SPREAD OPERATOR... copia los valores de colaboradores y le suma el valor del nuevo colaborador
      actualizarColaboradores([...colaboradores, colaborador]);
    }

    // lista equipos
    const equipos=[
      {titulo:"Programación", colorPrimario:"#57C278", colorSecundario:"#D9F7E9"},
      {titulo:"Front End", colorPrimario:"#82CFFA", colorSecundario:"#E8F8FF"},
      {titulo:"Data Science", colorPrimario:"#A6D157",colorSecundario:"#F0F8E2"},
      {titulo:"Devops",colorPrimario:"#E06B69", colorSecundario:"#FDE7E8"},
      {titulo: "UX y Diseño", colorPrimario:"#DB6EBF",colorSecundario:"#FAE9F5"},
      {titulo: "Móvil", colorPrimario:"#FFBA05",colorSecundario:"#FFF5D9"},
      {titulo: "Innovación y Gestión", colorPrimario:"#FF8A29",colorSecundario:"#FFEEDF"}   
  ]

  return (
    <div>
       <Header/>
       {mostrarFormulario ?  <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} 
       registrarColaborador={registrarColaborador}/> : <></>} 

       <MiOrg cambiarMostrar={cambiarMostrar}/>

        {equipos.map( (equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        />)}

        <Footer />
    </div>
  );
}

export default App;
