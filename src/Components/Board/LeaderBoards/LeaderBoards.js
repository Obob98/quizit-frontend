import { useContext, useEffect, useState } from 'react'
import './LeaderBoard.css'
import axios from 'axios'
import authContext from '../../../Context/authContext'
import Loader from '../../../Loader'
import Error from '../../../Error'
import AEP from '../../../http-common'

const LeaderBoards = () => {
  const [players, setPlayers] = useState([])  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const {credentials} = useContext(authContext)

  useEffect(() => {
    setLoading(true)
    setError(false)
    AEP.get('/getusers')
      .then(response => {
        setLoading(false)
        const sorted = response.data.sort((a, b) => b.score - a.score) 
        setPlayers([...sorted])
      })
      .catch(err => {
        setError(false)
        setLoading(true)
      })
  }, [])
  
  return (
    <div className='LeaderBoard'>
      <h4>Top Players</h4>
      {
        loading ? <Loader /> :
        error ? <Error /> : 
        <>
          <div className='players'>
          {
            players.map((player, i) =>
              <div key={player._id} className={`player  ${credentials.user[0]._id === player._id ? 'self' : ''}`}>
                <div className={`rank i${i}`}><h3>{i + 1}</h3></div>
                <div className='DP'>{player.dp}</div>
                <div className='name'>{
                  credentials.user[0]._id === player._id ? 'You' : player.username
                }</div>
                <p>{player.score} XP</p>
              </div>
            )
          }
          </div>
        </>
      }
    </div>
  )
}

export default LeaderBoards