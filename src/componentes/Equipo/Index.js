import "./Equipo.css"
import Colaborador from "../Colaborador/Index";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {//backgroundColor es igual a background-Color del css
    const {colorPrimario,/*colorSecundario,*/titulo, id}=props.datos;
    const colorObj={backgroundColor: hexToRgba(colorPrimario, 0.6)};
    const colorH3={borderColor: colorPrimario};
    const {colaboradores, eliminarColaborador, actualizarColor, like}=props;


    return <>
    {colaboradores.length > 0 &&
        <section className="equipo" style={colorObj}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value,id)
                }}

            />
        <h3 style={colorH3}>{titulo}</h3>
        <div className="colaboradores"> 
           {colaboradores.map((colaborador, index)=> <Colaborador 
            datos={colaborador}
            key={colaborador.index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}
            />)}  
            
        </div>       
    </section>
}</>
}
export default Equipo 