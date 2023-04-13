import "./Equipo.css"
import Colaborador from "../Colaborador/Index";

const Equipo = (props) => {//backgroundColor es igual a background-Color del css
    const {colorPrimario,colorSecundario,titulo}=props.datos;
    const colorObj={backgroundColor: colorSecundario};
    const colorH3={borderColor: colorPrimario};
    const {colaboradores}=props;


    return <>
    {colaboradores.length > 0 &&
        <section className="equipo" style={colorObj}>
        <h3 style={colorH3}>{titulo}</h3>
        <div className="colaboradores"> 
           {colaboradores.map((colaborador, index)=> <Colaborador 
            datos={colaborador}
            key={colaborador.index} 
            colorPrimario={colorPrimario}/>)}   
        </div>       
    </section>
}</>
}
export default Equipo 