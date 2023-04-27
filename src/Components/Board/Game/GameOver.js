import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { IoMdRefresh, IoMdHome, IoMdStats } from 'react-icons/io'
import { useContext, useEffect } from 'react'
import authContext from '../../../Context/authContext'
import axios from 'axios'

const GameOver = ({score, reset}) => {
  console.log('in game over')

  const {credentials, setCredentials} = useContext(authContext)

  useEffect(() => {
      console.log(score)
      axios.put(`http://localhost:5000/quizit/api/v1/users/addScore/${credentials.user[0]._id}`, {score: score})
      .then(response => setCredentials({...credentials, user: response.data}))
      .catch(err => console.log(err))
  }, [])
  
  return ReactDOM.createPortal(
    (
      <div className='GameOver'>
          <h1>GameOver</h1>
          <div className='score'>
              <h2>SCORE: {score || 0}</h2>
          </div>
          <div className='options'>
              <Link to={'/'}>
                Continue to Home
                <IoMdHome />
              </Link>
              <Link to={'/game'} onClick={() => reset(false)}>
                Play Again
                <IoMdRefresh />
              </Link>
              <Link to={'/leaderboards'}>
                Check Lanking in LeaderBoards
                <IoMdStats />
              </Link>
          </div>
      </div>
    ),
    document.getElementById('modal')
  ) 
}

export default GameOver