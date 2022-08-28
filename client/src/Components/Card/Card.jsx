import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export default function Card({name, image, continents, id}){
    return(
        <Link style={{textDecoration: 'none'}} to={`/home/${id}`}>
        <div className="letra-paises">
            <h1> {name}</h1>
                <h2> {continents} </h2>
            <img className="image-size" src={image} alt="imagen no hallada" width="auto" height="250px" />
        </div>
        </Link>
    )

}