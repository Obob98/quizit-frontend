import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGameControllerB, IoMdHome, IoMdStats } from 'react-icons/io'

const Nav = () => {
  const [route, setRoute] = useState('/')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const location = window.location.href.replace('http://localhost:3000/', '/')
    if(location === '/' || location === '/game' || location === '/leaderboards'){
      setRoute(location)
    }else{
      window.location.href = '/'
    }
  }, [toggle])

  return (
    <div className='Nav'>
      <Link to={'/'} onClick={() =>setToggle(!toggle)}>
        <IoMdHome size={'2rem'} color={route === '/' ? '#fff' : 'rgba(255, 255,255, 0.5'} />
      </Link>
      <Link to={'/game'} onClick={() =>setToggle(!toggle)}>
        <IoLogoGameControllerB size={'2rem'} color={route === '/game' ? '#fff' : 'rgba(255, 255,255, 0.5'} />
      </Link>
      <Link to={'/leaderboards'} onClick={() =>setToggle(!toggle)}>
        <IoMdStats size={'2rem'} color={route === '/leaderboards' ? '#fff' : 'rgba(255, 255,255, 0.5'} />
      </Link>
    </div>
  )
}

export default Nav