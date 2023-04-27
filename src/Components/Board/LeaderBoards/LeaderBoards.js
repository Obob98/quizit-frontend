import { useContext, useEffect, useState } from 'react'
import './LeaderBoard.css'
import axios from 'axios'
import authContext from '../../../Context/authContext'
import Loader from '../../../Loader'

const LeaderBoards = () => {
  const [players, setPlayers] = useState([])
  
  const [loading, setLoading] = useState(false)

  const {credentials} = useContext(authContext)

  useEffect(() => {
    axios.get('https://gleaming-gray-gecko.cyclic.app/quizit/api/v1/users/getusers')
      .then(response => {
        const sorted = response.data.sort((a, b) => b.score - a.score) 
        setPlayers([...sorted])
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='LeaderBoard'>
      <h4>Top Players</h4>
      {
        loading ? <Loader /> : 
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