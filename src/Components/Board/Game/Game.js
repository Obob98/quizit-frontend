import { useEffect, useState, useContext } from 'react'
import './Game.css'
import Topics from './Topics'
import Button from '../../CONSTANTS/Button'
import Query from './Query'
import Prompts from './Prompts'
import axios from 'axios'
import gameContext from '../../../Context/gameContext'
import GameOver from './GameOver'
import AEP from '../../../http-common'
import Timer from './Timer'

console.log('in game')

const Game = () => {
  const [scoreline, setScoreline] = useState([])
  const [countDown, setCountDown] = useState(false)
  const [topics, setTopics] = useState(false)
  const [selectedTopics, setSelectedTopics] = useState([])
  const [fetch, setFetch] = useState(false)
  const [gameOver, setGameover] = useState(false)
  
  const {game, gameSetter} = useContext(gameContext)

  useEffect(() => {
    gameSetter({})
    let QA = []
    console.log('in use effect fetch')
    selectedTopics.forEach(value => {
      AEP.post('/getquestions', {value})
      .then(response => {
        gameSetter({
          QA: [...QA, ...response.data],
          questionsTotal: response.data.length + QA.length,
          questionNumber: 1,
          questionPointer: 0,
          selected: 0,
          score: 0
        })
        QA = [...response.data]
      })
      .then(()=>{
        setTopics(true)
      })
      .catch(err => console.log(err))
    })
  }, [fetch])
  
  const proceedToGame = () => {
    if(selectedTopics.length === 0) {
      return alert('select atleast a single option')
    } 
    else{
      setFetch(!fetch)
    }
  }
  
  const selectTopic = update => {
    
    !update.boo ? setSelectedTopics(selectedTopics.filter(topic => topic !== update.value)) :
    setSelectedTopics([...selectedTopics, update.value])
  }

  const checkGameOver = () => {
    if(game.questionNumber >= game.questionsTotal){
      endGame()
    }else{
      return false
    }
  }
  
  const endGame = () => {
    gameSetter({
      ...game,
      questionNumber: game.questionNumber + 1,
      questionPointer: game.questionPointer + 1,
      score: checkScore() ? game.score +  10 : game.score 
    })
    setScoreline([])
    setCountDown(false)
    setTopics(false)
    setSelectedTopics([])
    setGameover(true)
    return true
  }

  const checkScore = () => game.QA[game.questionPointer].answer[0].correctIndex === game.selected

  const handleNext = () => {
    console.log(checkScore())
    setScoreline([...scoreline, checkScore() ? 'success' : 'danger'])
    if(checkGameOver()) return
    gameSetter({
      ...game,
      questionNumber: game.questionNumber + 1,
      questionPointer: game.questionPointer + 1,
      score: checkScore() ? game.score +  10 : game.score 
    })
  }
  
  return (
    <div className={`Game ${countDown && 'danger'}`}>
      {
        gameOver ?
        <GameOver reset={setGameover} score={game.score} /> :
        !topics ? 
          <>
            <h4>Select Topics</h4>
            <Topics selectTopic={selectTopic} />  
            <Button onclick={proceedToGame} {...{width: 200, background: '#2C5663', color: '#f1f1f1', value: 'Proceed'}} />
          </> :
          <>
            <div className='scoreline'>
              {
                scoreline.map((value, i) => <div key={i} className={value}></div>)
              }
            </div>
            <Timer endGame={endGame} countDown={countDown} setCountDown={setCountDown} />
            <Query />  
            <Prompts />
            <Button onclick={handleNext} {...{width: 200, background: '#2C6342', color: '#f1f1f1', value: 'Next'}} />
          </>
      }
    </div>
  )
}

export default Game