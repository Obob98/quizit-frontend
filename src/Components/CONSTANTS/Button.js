import React, { useEffect, useState } from 'react'

const Button = (props) => {
  const [style, setStyle] = useState({
    background: 'none'
  })

  useEffect(() => {
    setStyle(props)
  })

  return (
    <button onClick={props.onclick} style={style}>{props.value}</button>
  )
}

export default Button