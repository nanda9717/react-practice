import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import UseCallbackChild from './ChildComponent/UseCallbackChild';
import UseCallbackChildWithProps from './ChildComponent/UseCallbackChildWithProps';

export default function LearnUseCallback() {
    const [add, setAdd] = useState(1);

    const Learning = useCallback(() => {
        console.log('Parent Component');
    },[])

    /*
        - When we are changing any state in parent component then its calling child component so its not correct
          because it will create performance issue.
        - To prevent this problem we used memo function in child component.
        i.e. UseCallbackChild Component
    */

    /*
        - If we have any props as function then it will not work with memo. That time we will use useCallback hook
          and will pass that function inside useCallback.
        - If we want to call this function on any stage change then we can pass that state as dependancy in useCallback.
    */
    
    return (
            <div className='compDiv'>
                <div>
                    <Link className='backBtn' to="/learning">Back</Link>
                    <h2>useCallback Hook</h2>
                    <p>The React <span style={{color:'red'}}>useCallback</span> Hook returns a memoized function.</p>
                    <p><span style={{color:'red'}}>useCallback</span> Hook only runs when one of its dependencies update.</p>
                    <p>The useCallback hook is <span style={{color:'#146968',fontWeight:600}}>a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render</span></p>
                </div>
                <hr className='divider'/>
                <div>
                    <span>{add}</span>
                    <button onClick={()=>setAdd(add+1)}>Add</button>
                    <br/>
                    <UseCallbackChild />
                    <UseCallbackChildWithProps Learning={Learning} />
                </div>
            </div>
    )
}
