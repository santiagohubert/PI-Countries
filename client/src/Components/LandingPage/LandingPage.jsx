import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import CardLanding from "./CardLanding/CardLanding";
import "./landingPage.css";

export default function LandingPage() {
    return (
        <Fragment>
            <NavBar />
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
                <button className="btn1" type="button"> ¡A VOLAR! </button>
                {/* </div> */}
            </Link>
            </Fragment>
            </div>
            <div className="container-propagan">
                <div className="container-logo">
                    <img
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/59/64/1c/59641cd5-9d69-7d00-e472-e555b4bdb3bd/source/256x256bb.jpg"
                        width="120px"
                        alt="img"
                        className="LogosM"
                    />
                    <img
                        src="http://www.sirchandler.com.ar/wp-content/uploads/2013/08/despegar-logo.png"
                        width="120px"
                        alt="img"
                        className="LogosM"
                    />
                    <img
                        src="https://i0.wp.com/viajesyrelatos.com/wp-content/uploads/2017/09/almundo-logo.png?fit=3305%2C1063"
                        width="120px"
                        alt="img"
                        className="LogosM"
                    />
                    <img
                        src="https://i.pinimg.com/originals/98/8d/cc/988dcca539678a4d4141d470cde8d5b1.png"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa-uyIbRv0Z9O24iwVjrQcx7HP5ICMQW4nkfO8fvmAqRK0vTrdQJSQM2Fk8RVAiF2Q2I&usqp=CAU"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://i.pinimg.com/280x280_RS/e6/ef/8f/e6ef8f98fc19925603ae7e500d291970.jpg"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple7/v4/85/a9/50/85a950f0-f32b-6644-dc8f-d43e94657611/source/256x256bb.jpg"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="http://www.experienciasturismo.com/wp-content/uploads/2016/08/Retina-Experiencias-Turismo-Logo-Web.png"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/joybyet6unhie8xi55gz"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://comingsoon.ae/wp-content/uploads/2018/01/20228889_10154852842886818_3414718733247474557_n.jpg"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/mastercard-10-226450.png"
                        width="120px"
                        alt="img"
                        className="Logosm"
                    />


                    
                </div>
            </div>
            <div className="contain-formatos">
                <div className="formatos-viajes">
                    <h1 className="title-dinamica"> Te ayudamos a planear tu viaje </h1>
                        <h2> ¿Sabías que podes hacerlo desde tres intereses? </h2>
                        <CardLanding />
                        <h3> Esto nos abre muchas más posibilidades: </h3>
                            Por interés geográfico o por actividad turística.                   
                           <p> ¿En qué consiste? </p>
                            <p>Interés geográfico es cuando tenes ganas de visitar tal país, por su paisaje, cultura, etc. </p>
                            Planearlo desde una actividad turística es cuando tenes ganas de vivir determinadas experiencias, entonces te ayudamos a que sepas que países pueden ofrecerte esa posibilidad.          

                </div>
                {/* //Para que viajar nunca deje de ser novedoso, podes planificar tu viaje de dos formas: por interés  */}
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    )
}