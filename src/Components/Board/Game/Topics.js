import { useState, useContext, useEffect } from 'react'
import Button from '../../CONSTANTS/Button'
import gameContext from '../../../Context/gameContext'
import axios from 'axios'
import Game from './Game'
import Loader from '../../../Loader'
import Error from '../../../Error'
import AEP from '../../../http-common'

const Topics = ({selectTopic}) => {
  const [topics, setTopics] = useState([])
  const [selected, setSlected] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(()=> {
    setError(false)
    setLoading(true)
    AEP.get('/gettopics')
    .then(response => {
      setLoading(false)
      setTopics([...JSON.parse(response.data)])
    })
    .catch(err => {
      setError(true)
      setLoading(false)
      })
  }, [])

  const select = value => {    
    selected.some(topic => topic === value) ? 
    setSlected(selected.filter(topic => topic !== value)) :
    setSlected([...selected, value])
    selected.some(topic => topic === value) ? 
    selectTopic({boo: false, value}) : 
    selectTopic({boo: true, value})
  }

  const {game} = useContext(gameContext)

  return (
    <div className='Topics'>
      <div >
        {
          loading ? <Loader /> :
            error ? <Error /> :
            <>
              {
                topics.map((topic, i) => 
                <Button key={i} 
                  onclick={() => select(topic)} 
                  {
                    ...{width: 200, background: `${selected.some(tpc => tpc === topic) ?
                  '#f1f1f1' : 'none'}`, color: `${selected.some(tpc => tpc === topic) ?
                    '#000' : '#c8c8c8'}`, border: '1px solid #f1f1f1', value: `${topic}`}
                  } 
                  />
                )
              }
            </>
        }
      </div>
    </div>
  )
}

export default Topics