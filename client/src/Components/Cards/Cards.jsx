import React from "react";
import Card from "../Card/Card";
import './cards.css';

export default function Cards({allCountries}){
   return( 
    <div className="cards-container">
    {allCountries.map((e,i)=> {
        return <Card key={i} image={e.flag} name={e.name} continents={e.continents} id={e.id}/>
    })}
    </div>
    )
}
