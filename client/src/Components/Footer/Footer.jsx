import React from "react";
import '../Footer/footer.css'
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-footer">
            <div className="contain-footer">
                <div>
                <div>
                    <h5> ¡A volar! </h5>
                        <p> Explora el mundo desde tu casa. </p>
                </div>
                </div>
                <div>
                    <h5> Links
                    </h5>
                        <p> Política y privacidad </p>
                        <p> Avisos legales </p>
                        <p> Terminos y condiciones </p>
                        <p> Sobre nosotros </p>
                </div>
            </div>
         </footer>   
    )

}