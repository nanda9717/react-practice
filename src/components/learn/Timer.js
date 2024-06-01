import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Timer() {
    let timerRef = useRef();
    let [time, setTime] = React.useState(0);

    const format = (time) => {
        const minutes = Math.floor(time/60) > 9 ? Math.floor(time/60) : `0${Math.floor(time/60)}`;
        const seconds = time - (Math.floor(time/60) * 60);
        return `${minutes}:${seconds > 9 ? seconds: `0${seconds}`}`;
    }

    useEffect(()=>{
        console.log(`initializing interval`);
        timerRef.current = setInterval(() => {
                                setTime(time+1)
                            }, 1000);

        return () => {
            console.log(`clearing interval`);
            clearInterval(timerRef.current);
        };
    },[time]);

    const stopTimer = () => {
        clearInterval(timerRef.current);
    }

    const startTimer = () => {
        setTime(0);
    }
    
    const resumeTimer = () => {
        setTime(time+1);
    }

  return (
    <div className='compDiv'>
        <Link className='backBtn' to="/learning">Back</Link>
        <h2>Timer</h2>
        <p>{format(time)}</p>
        <p>
            <button onClick={startTimer}>Start Over</button>
            <button onClick={resumeTimer}>Resume</button>
            <button onClick={stopTimer}>Stop</button>
        </p>
    </div>
  )
}
