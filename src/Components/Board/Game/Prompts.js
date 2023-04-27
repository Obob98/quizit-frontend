import React, { useState, useContext, useEffect } from 'react'
import gameContext from '../../../Context/gameContext'

const Prompts = () => {
  const [check, setChecked] = useState(0)

  const {game, gameSetter} = useContext(gameContext)
  
  // console.log('prompos:', game.QA[0].answer[0].options)
  
  useEffect(()=>{
    gameSetter({
      ...game,
      selected: check
    })
  }, [check])
  
  return (
    <div className='Prompts'>
      <div onClick={() => setChecked(0)}>
        <input type='radio' name='answer' checked={check === 0} onChange={() =>{}} />
        <label htmlFor='one'>{game.QA[game.questionPointer].answer[0].options[0]}</label>
      </div>
      <div onClick={() => setChecked(1)}>
        <input type='radio' name='answer' checked={check === 1} onChange={() =>{}} />
        <label htmlFor='two'>{game.QA[game.questionPointer].answer[0].options[1]}</label>
      </div>
      <div onClick={() => setChecked(2)}>
        <input type='radio' name='answer' checked={check === 2} onChange={() =>{}} />
        <label htmlFor='three'>{game.QA[game.questionPointer].answer[0].options[2]}</label>
      </div>
      <div onClick={() => setChecked(3)}>
        <input type='radio' name='answer' checked={check === 3} onChange={() =>{}} />
        <label htmlFor='four'>{game.QA[game.questionPointer].answer[0].options[3]}</label>
      </div>
    </div>
  )
}

export default React.memo(Prompts)