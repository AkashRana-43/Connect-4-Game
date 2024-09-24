import React from 'react'
import '../Game.css'

const onClick = (id) => {
    alert('Click' + id)
}

const GameCircle = ({ id }) => {

    return (
        <div className={`gameCircle ${id % 2 === 0 ? 'odd' : 'even'}`} onClick={() => onClick(id)}>
            
        </div>
    )
}

export default GameCircle