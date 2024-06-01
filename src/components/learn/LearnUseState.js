import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function LearnUseState() {
    const [count, setCount] = useState(0);

    return (
        <div className='compDiv'>
            <div>
                <Link className='backBtn' to="/learning">Back</Link>
                <h2>useState Hook</h2>
                <p>The React <span style={{color:'red'}}>useState</span> Hook allows us to track state in a functional component</p>
                <p><span style={{color:'red'}}>useState</span> is used to manage state within a component, allowing you to store and update data.</p>
                <p>It returns an array with two values: the current state and a function to update it.</p>
                <p className='displayCode'><code className='code'>const [count, setCount] = useState(0)</code></p>
            </div>
            <hr className='divider'/>
            <div>
                <h4>Button Clicked {count} times</h4>
                <button onClick={()=>setCount(count+1)}>Add</button>
            </div>
        </div>
    )
}
