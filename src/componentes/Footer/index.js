import "./Footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>

     <strong>Desarrollado por: Heyme Coraspe</strong>
     <img src='/img/Logo.png' alt='org' /> 

        <div className="redes">
        <a className="linkendin" href='https://www.linkedin.com/in/heyme-coraspe-bueno'> 
            <img src="/img/lkd.png" alt="Linkedin"/></a>
        <a className="GitHub" href='https://github.com/HeymeCoraspe'> 
            <img src="/img/github.png" alt="github"/></a>
        </div>
        
        
    </footer>
}
export default Footer;