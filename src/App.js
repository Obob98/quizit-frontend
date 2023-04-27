import React, {useState} from 'react'
import Navigation from './Components/Navigation/Navigation'
import Board from './Components/Board/Board'
import Nav from './Components/Navigation/Nav'
import Login from './Login'
import authContext from './Context/authContext'

const App = () => {
const [credentials, setCredentials] = useState({})

  return (
    <>{
        credentials.authenticated ?
      <React.Fragment>
        <h3 className='Logo'>QUIZit</h3>
        <Navigation />
        <authContext.Provider value={{credentials}} >
          <Board />
        </authContext.Provider>
        <Nav />
      </React.Fragment> :
      <authContext.Provider value={{credentials, setCredentials}} >
        <Login />
      </authContext.Provider>
    }</>
  )
}

export default App