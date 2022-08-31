import React from 'react';
import './activityCard.css';

export default function ActivityCard(activities) {
    return (
        <div className='letra-agregada'> 
            {activities && (
                <div>
                  <p><b>Actividad: </b>{activities.name}</p>
                 <p><b>Dificultad: </b>{activities.difficulty}</p>
                 <p><b>Duration: </b>{activities.duration} horas</p>
                 <p><b>Temporada: </b>{activities.season}</p>
              </div>  
            )}
        </div>
    )
}
