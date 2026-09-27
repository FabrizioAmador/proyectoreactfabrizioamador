import React from 'react'

function Asistentes({nombre, tarea, emoji}){
    return(
        <div>
            <h3>{nombre}</h3>
            <p>{tarea}</p>
            <p>{emoji}</p>
        </div>
    );
}

export default Asistentes