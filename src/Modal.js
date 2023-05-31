import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { IoMdRefresh, IoMdHome, IoMdStats } from 'react-icons/io'
import { useContext, useEffect } from 'react'
import authContext from '../../../Context/authContext'
import axios from 'axios'
import AEP from '../.../../../../http-common'

const Modal = ({msg}) => {
  console.log('in game over')

  const {credentials, setCredentials} = useContext(authContext)

  useEffect(() => {
      console.log(score)
      AEP.put(`/addScore/${credentials.user[0]._id}`, {score: score})
      .then(response => setCredentials({...credentials, user: response.data}))
      .catch(err => console.log(err))
  }, [])
  
  return ReactDOM.createPortal(
    (
      <div className='Modal'>
          {msg}
      </div>
    ),
    document.getElementById('modal')
  ) 
}

export default Modal