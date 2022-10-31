import React from "react";
import '../Footer/footer.css'
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-footer">
            <div className="contain-footer">
                 <ul>
                     <h2> ¡A volar! </h2>   
                        <p className="frase-foot"> Explora el mundo desde tu casa. </p>
                    
                    <h2 className="link-edit"> Links </h2> 
                   <p> <a href="/legal" className="fuente-link"> Avisos legales </a> / <a href="/about" className="fuente-link"> Sobre nosotros </a> </p>
                       
                    <h2> Contacto </h2>
                        <p> <a> Mail </a> <a> Redes </a> <a> Número </a> </p> 
                    </ul>   
     </div>
    
    <div>
      <div>
<a className="derechos-foot"> © 2022 ¡A VOLAR! TODOS LOS DERECHOS RESERVADOS.</a> <a href="/privacy"> POLÍTICA DE PRIVACIDAD </a> - <a href="/term"> TÉRMINOS Y CONDICIONES </a>
</div>
    </div>
         </footer>   
    )

}