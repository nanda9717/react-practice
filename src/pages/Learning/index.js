import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className='learning-page'>
        <h2>Learning</h2>
        <ol>
            <li>
                <Link to="/learning/timer">Timer</Link>
            </li>
            <li>
                <Link to="/learning/useState">useState Hook</Link>
            </li>
            <li>
                <Link to="/learning/useEffect">useEffect Hook</Link>
            </li>
            <li>
                <Link to="/learning/useMemo">useMemo Hook</Link>
            </li>
            <li>
                <Link to="/learning/useCallback">useCallback Hook</Link>
            </li>
            <li>
                <Link to="/learning/useRef">useRef Hook</Link>
            </li>
        </ol>
    </div>
  )
}
