import { useContext, useState } from 'react'
import './Home.css'
import {IoMdArrowDropdown, IoMdArrowDropright} from 'react-icons/io'
import authContext from '../../../Context/authContext'
import Loader from '../../../Loader'

const Home = () => {
  const [pointer, setPointer] = useState('one')
  
  const [loading, setLoading] = useState(false)

  const {credentials} = useContext(authContext)
  console.log(credentials.user[0].username)
  return (
    <div className='Home'>
    {
      loading ? <Loader /> :
      <>
        <div className='welcome-tab'>
          <h4>Welcome {credentials.user[0].username}</h4>
          <p>We are very excited that you have joined our community. </p>
        </div>
        <div className='how'>
          <h4>How to play?</h4>
          <ol>
            <li>To play QUIZit, Click the controller icon on the Navigation floater</li>
            <li>You will be taken to the game tab where you will be prompted to choose a topic. Choose atleast one Topic</li>
            <li>
              After choosing a topic the game will initiate, to play choose the answer you think its correct from the dropdown and click next to proceed to next question
            </li>
            <li>every question have a minimum time, if the time runs before you answer, you will loose the points allocated to the question and the game will move to the next question</li>
            <li>Points will be a percentage of the correct answers you provided against the total number of question</li>
            <li>After every game, you will be redirected to the leaderboards where other users progress are shown, The user with the most points is ranked first</li>
            <li>you can visit the leaderboards anytime you want by clicking the lastr icon in the navigation tray</li>
            <li>Good luck on your competition</li>
          </ol>
        </div>
        <div className='FAQ Last'>
          <h4>Frequently Asked Questions</h4>
          <div className='accordions'>
            <div className='accordion' onClick={()=> setPointer('one')}>
              <div className='question'>
                <h5>Question</h5>
              </div>
              {
                pointer === 'one' &&
                  <>
                    <div className='answer'>
                      <p>Answer</p>
                    </div>
                    <IoMdArrowDropdown size={30} className='arrow' />
                  </>
              }
              {
                pointer !== 'one' && <IoMdArrowDropright size={30} className='arrow' />
              }
            </div>
            <div className='accordion' onClick={()=> setPointer('two')}>
              <div className='question'>
                <h5>Question</h5>
              </div>
              {
                pointer === 'two' &&
                  <>
                    <div className='answer'>
                      <p>Answer</p>
                    </div>
                    <IoMdArrowDropdown size={30} className='arrow' />
                  </>
              }
              {
                pointer !== 'two' && <IoMdArrowDropright size={30} className='arrow' />
              }
            </div>
            <div className='accordion' onClick={()=> setPointer('three')}>
              <div className='question'>
                <h5>Question</h5>
              </div>
              {
                pointer === 'three' &&
                  <>
                    <div className='answer'>
                      <p>Answer</p>
                    </div>
                    <IoMdArrowDropdown size={30} className='arrow' />
                  </>
              }
              {
                pointer !== 'three' && <IoMdArrowDropright size={30} className='arrow' />
              }
            </div>
          </div>
        </div>

      </>
    }
    </div>
  )
}

export default Home