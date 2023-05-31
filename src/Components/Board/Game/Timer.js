import { useEffect, useState } from "react"

const Timer = ({endGame, countDown, setCountDown}) => {
    const [sec, setSec] = useState(30)
    const [min, setMin] = useState(0)

    useEffect(() => {
        console.log('in timer useeffect')
        const int = setInterval(() => {
            if(sec === 0 && min === 0){
                setSec(0)
                return endGame()
            }else if(sec > 0){
                setSec(prevSec => prevSec - 1)
            }else if(sec === 0 && min >= 0){
                setSec(59)
                setMin(prevMin => prevMin - 1)
            }
        }, 1000);

        if(sec <= 15 && min === 0){
            setCountDown(true)
        }
        return () => clearInterval(int)
    }, [min, sec])
    
  return (
    <div className='Timer'>
        <h3>
            {
                min === 0 ? '00' :
                min < 10 ? '0' + min :
                min
            } : {
                sec === 0 ? '00' :
                sec < 10 ? '0' + sec :
                sec
            }
        </h3>
        {
            countDown && <h1>
            {
                sec === 0 ? '00' :
                sec < 10 ? '0' + sec :
                sec
            }
            </h1>
        }
    </div>
  )
}

export default Timer