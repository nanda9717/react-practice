import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LearnUseRef() {
    const refElement = useRef("");
    const [inputValue, setInputValue] = useState('');

    const resetInput = () => {
        setInputValue("");
        refElement.current.focus();
    }

    /*
        - By using useRef we can manipulate the dom element. we can use it to focus text field. here after reset the
          value we are focusing text field.
        - Also we can change property  using it like color, value
    */

    const handleInput = () => {
        refElement.current.style.color = 'red';
        //refElement.current.value = 'Nane Singh';
    } 

    return (
        <div className='compDiv'>
            <div>
                <Link className='backBtn' to="/learning">Back</Link>
                <h2>useRef Hook</h2>
                <p>In React JS <span style={{color:'red'}}>useRef</span> is a hook that allows us to create a mutable reference to an element or a value. Unlike the useState hook, updating a useRef does not trigger a re-render of the component.</p>
                <p>It can be used to access a DOM element directly.</p>
            </div>
            <hr className='divider'/>
            <div>
                <input ref={refElement} type="text" name="name" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={resetInput}>Reset</button>
                <button onClick={handleInput}>Handle Input</button>
            </div>
        </div>
    )
}
