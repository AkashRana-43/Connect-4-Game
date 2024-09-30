import React from 'react'
import '../Game.css'


const GameCircle = ({ id, className, onCircleClicked }) => {

    return (
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
            
        </div>
    )
}

export default GameCircle