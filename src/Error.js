import { Link } from 'react-router-dom'
import Button from './Components/CONSTANTS/Button'
import './Error.css'

const Error = ({handleClick, handleClickValue, setError, userinfo}) => {

  const handleError = () => {
    setError(false)
    handleClick(handleClickValue, userinfo)
  }
  
  return (
    <div className='Error'>
        <h3>OPPS!... there has been some error, try reconecting again</h3>
        <Link to={'/'} onClick={handleError}>
          <Button {...{width: 100, background: '#2C5663', color: '#f1f1f1', value: 'Retry'}} />
        </Link> 
    </div>
  )
}

export default Error