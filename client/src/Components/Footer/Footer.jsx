import React from "react";
import '../Footer/footer.css'
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-footer">
            <div className="contain-footer">
                <div>
                <div>
                    <h2> ¡A volar! </h2>
                        <p> Explora el mundo desde tu casa. </p>
                </div>
                </div>
                <div>
                    <h2> Links
                    </h2>
                        <p> Política y privacidad </p>
                        <p> Avisos legales </p>
                        <p> Terminos y condiciones </p>
                        <p> Sobre nosotros </p>
                </div>
                <div>
                    <h2> Contacto </h2>
                    <p> Mail </p>
                    <p> Redes </p>
                    <p> Número </p>
                </div>
            </div>
         </footer>   
    )

}