import { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './Board.css'
import Home from './Info/Home'
import Game from './Game/Game'
import LeaderBoards from './LeaderBoards/LeaderBoards'
import gameContext from '../../Context/gameContext'
import Pro from './Pro/Pro'

const Board = () => {
  const [currentRoute, setCurrentRoute] = useState('info')
  const [game, gameSetter] = useState(
    'inititial'
  )

  // console.log(game)
  
  return (
    <div className='Board'>
      <gameContext.Provider value={{game, gameSetter}}>
        <Routes>  
          <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
            <Route path='/leaderboards' element={<LeaderBoards />} />
            <Route path='/Pro' element={<Pro />} />
        </Routes>
      </gameContext.Provider>
    </div>
  )
}

export default Board