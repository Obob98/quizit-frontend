import React, { useContext, useState } from 'react'
import JQ from './JavascipteQ'
import gameContext from '../../../Context/gameContext'

const Query = () => {  
  const {game} = useContext(gameContext)
  
  console.log('query', )
  return (
    <div className='Query'>
      <p>question</p>
      <p>{game.QA[0].question}</p>
      {/* <p>{game.QA[game.questionPointer].question}</p> */}
    </div>
  )
}

export default React.memo(Query)