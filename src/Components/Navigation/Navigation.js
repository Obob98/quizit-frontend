import './Navigation.css'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import {AiOutlineMenu} from 'react-icons/ai'

const Navigation = () => {
  const [hide, setHide] = useState(true)
  
  return (
    <>
      <AiOutlineMenu size={30} onClick={() => setHide(!hide)} className='menubtn' />
      <div className={`Navigation ${hide ? 'hide' : '' }`}>
        <Menu />
      </div>
    </>
  )
}

export default Navigation