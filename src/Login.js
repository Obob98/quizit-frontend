import './Login.css'
import Button from './Components/CONSTANTS/Button'
import authContext from './Context/authContext'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

const initialUser = {
    username: '',
    password: ''
}

const Login = () => {
    const [spotlight, setSpotlight] = useState('login')
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState(initialUser)

    const {setCredentials} = useContext(authContext)
    
    const handleClick = value => {
        if(spotlight === value){
            value === 'login' && submitLogin()
            value === 'signup' && submitSignup()
        }else{
            setUser(initialUser)
            setSpotlight(value)
        }
    }

    const setUsername = e => {
        setUser({...user, username
            : e.target.value})
    }

    const setPassword = e => {
        setUser({...user, password
            : e.target.value})
    }
    
    const submitLogin = () => {
        setLoading(true)
        if(user.username === '' || user.password === '') return alert('please fill all fields before submiting')
        axios.post('https://gleaming-gray-gecko.cyclic.app/quizit/api/v1/users/getuser', user)
        .then(response => {
                setLoading(false)
                console.log(response.data.length)
                if(response.data.length){
                    setCredentials({
                        authenticated: true,
                        user: response.data
                    })
                }else{
                    // setUser(initialUser)
                    alert('username or password incorrect')
                }
            })
        .catch(err => console.log('in login submit catch: ', err))
    }

    const submitSignup = () => {
        setLoading(true)
        if(user.username === '' || user.password === '') return alert('please fill all fields before submiting')
        axios.post('https://gleaming-gray-gecko.cyclic.app/quizit/api/v1/users/createuser', user)
        .then(response => {
                console.log(response.data.length)
                if(response.data.length){
                    setCredentials({
                        authenticated: true,
                        user: response.data
                    })
                    setLoading(false)
                }else{
                    // setUser(initialUser)
                    alert('some error occured')
                }
            })
        .catch(err => console.log('in login submit catch: ', err))
    }

  return (
    <div className='Login'>
        <div className='container'>
        {
            loading ? <Loader /> :
            <>

                <div className={`signup ${spotlight === 'signup' ? 'spotlight' : ''}`}>
                    <form onSubmit={submitLogin}>
                        <input type='text' value={user.username} placeholder='Username' onChange={setUsername} />
                        <input type='password' value={user.password} placeholder='Password' onChange={setPassword} />
                    </form>
                <Button onclick={() => handleClick('signup')} {...{width: 100, background: '#2C6342', color: '#f1f1f1', value: 'Signup'}} />
                </div>
                <div className={`login ${spotlight === 'login' ? 'spotlight' : ''}`}>
                    <form onSubmit={submitSignup}>
                        <input type='text' value={user.username} placeholder='Username' onChange={setUsername} />
                        <input type='password' value={user.password} placeholder='Password' onChange={setPassword} />
                    </form>
                    
                <Button onclick={() => handleClick('login')} {...{width: 100, background: '#2C5663', color: '#f1f1f1', value: 'Login'}} />
                </div>
            </>
        }
        </div>
    </div>
  )
}

export default Login