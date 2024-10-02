import React from 'react'

const Footer = ({onClickNewGame, onClickSuggest}) => {
  return (
    <div className='panel footer'>
        <button onClick={onClickNewGame}>New Game</button>
        <button onClick={onClickSuggest} >Suggest</button>
    </div>
  )
}

export default Footer