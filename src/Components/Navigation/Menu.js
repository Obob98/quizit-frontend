import Settings from './Settings'
import Button from '../CONSTANTS/Button'
import { Link } from 'react-router-dom'

const Menu = () => {
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
        <Link to={'/pro'}>
          <Button {...{width: 200, background: '#f1f1f1', color: '#000', value: 'Settings'}} />
        </Link>
    </div>
  )
}

export default Menu