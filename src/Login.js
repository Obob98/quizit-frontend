import './Login.css'
import Button from './Components/CONSTANTS/Button'
import authContext from './Context/authContext'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Error from './Error'
import AEP from './http-common'

const initialUser = {
    username: '',
    password: ''
}

const Login = () => {
    const [spotlight, setSpotlight] = useState('login')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [handleClickValue, setHandleClickValue] = useState('')
    const [userinfo, setUser] = useState(initialUser)

    const {setCredentials} = useContext(authContext)
    
    const handleClick = (value, userdata) => {
        setHandleClickValue(value)
        if(spotlight === value){
            value === 'login' && submitLogin(userdata)
            value === 'signup' && submitSignup(userdata)
        }else{
            setUser(initialUser)
            setSpotlight(value)
        }
    }

    const setUsername = e => {
        setUser({...userinfo, username
            : e.target.value})
    }

    const setPassword = e => {
        setUser({...userinfo, password
            : e.target.value})
    }
    
    const submitLogin = (user) => {
        if(user.username === '' || user.password === '') return alert('please fill all fields before submiting')
        setLoading(true)
        AEP.post('/getuser', user)
        .then(response => {
            setError(false)
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
        .catch(err => {
            setLoading(false)
            setError(true)
        })
    }

    const submitSignup = (user) => {
        if(user.username === '' || user.password === '') return alert('please fill all fields before submiting')
        setLoading(true)
        AEP.post('/createuser', user)
        .then(response => {
            setError(false)
            setLoading(false)
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
        .catch(err => {
            setLoading(false)
            setError(true)
        })
    }

  return (
    <div className='Login'>
        <div className='container'>
        {
            loading ? <Loader /> :
            error ? <Error {...{handleClick, handleClickValue, setError, userinfo}} /> :
            <>

                <div className={`signup ${spotlight === 'signup' ? 'spotlight' : ''}`}>
                    <form onSubmit={submitLogin}>
                        <input type='text' value={userinfo.username} placeholder='Username' onChange={setUsername} />
                        <input type='password' value={userinfo.password} placeholder='Password' onChange={setPassword} />
                    </form>
                <Button onclick={() => handleClick('signup', userinfo)} {...{width: 100, background: '#2C6342', color: '#f1f1f1', value: 'Signup'}} />
                </div>
                <div className={`login ${spotlight === 'login' ? 'spotlight' : ''}`}>
                    <form onSubmit={submitSignup}>
                        <input type='text' value={userinfo.username} placeholder='Username' onChange={setUsername} />
                        <input type='password' value={userinfo.password} placeholder='Password' onChange={setPassword} />
                    </form>
                    
                <Button onclick={() => handleClick('login', userinfo)} {...{width: 100, background: '#2C5663', color: '#f1f1f1', value: 'Login'}} />
                </div>
            </>
        }
        </div>
    </div>
  )
}

export default Login