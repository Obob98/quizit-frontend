import Settings from './Settings'
import Button from '../CONSTANTS/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import authContext from '../../Context/authContext'
import gameContext from '../../Context/gameContext'

const Menu = () => {

  const {setCredentials} = useContext(authContext)
  const {gameSetter} = useContext(gameContext)
  
  const logout = () => {
    localStorage.clear()
    setCredentials({authenticated: false, user: {}})
    gameSetter({})
    window.location.href = '/'
  }
  
  return (
    <div className='Menu'>
        <nav>
            <ul>
              <Link to={'/pro'}>Profile</Link>
              <Link to={'/pro'}>Notifications</Link>
              <Link to={'/pro'}>Practice</Link>
              <Link to={'/pro'}>About</Link>
              <Link to={'/pro'}>{process.env.NODE_ENV}</Link>
              <Button {...{width: '100%', background: 'goldenrod', color: '#fff', fontWeight: 'bold', value: 'Upgrade to PRO'}} />
            </ul>
        </nav>
        {/* <Settings /> */}
          <Button onclick={logout} {...{width: 200, background: '#000', color: '#fff', value: 'Logout'}} />
    </div>
  )
}

export default Menu