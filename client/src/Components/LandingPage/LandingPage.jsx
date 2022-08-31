import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export default function LandingPage() {
    return (
        <Fragment>
            <div className="landing-contain">
                <div className="titulo-landing">
            <h1> ¿ESTÁS LISTO PARA VOLAR? </h1>
                </div>
                <div className="subtitulo-landing">
                <h2> ¡Prepará tu valija y vamos! </h2>
                </div>
                <Fragment>
            <Link to = '/home'>
                {/* <div className="containerbtn"> */}
                <button className="btn1" type="button"> COMENZAR </button>
                {/* </div> */}
            </Link>
            </Fragment>
            </div>
        </Fragment>
    )
}