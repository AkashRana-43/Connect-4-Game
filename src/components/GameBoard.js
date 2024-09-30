import React, { useState } from 'react'
import GameCircle from './GameCircle'
import Header from './Header'
import Footer from './Footer'
import { isWinner } from '../helper'
import '../Game.css'
import {
    NO_CIRCLES,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN
  } from '../Constants'

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameSate] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircles(i));
        }
        return circles;
    }

    const circleClicked = (id) => {
        console.log('Circle clicked: ' + id)

        if (gameBoard[id] !== NO_PLAYER) {
            console.log('Circle already occupied');
            return; 
        }

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameSate(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard)
        console.log(currentPlayer)
    }

    const renderCircles = (id) => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className='gameBoard'>
                {initBoard()}
            </div>
            <Footer />
        </>
    )
}

export default GameBoard
