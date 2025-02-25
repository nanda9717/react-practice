import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpensiveComponent from './ExpensiveUseMemo';

export default function LearnUseMemo() {
    const [add, setAdd] = useState(1);
    const [minus, setMinus] = useState(10);

    /*
    const multiple = () => {
        console.log('multiple function')
        return add*10;
        // this function is getting call either we click on add or Minus which is incorrect. This function should call while changing add state value only.
    }
    */

    const multiple = useMemo(()=>{
        console.log('Multiple function with useMemo');
        // We used useMemo to solve this problem. This time it will call only when we click on add added 'add' as dependency;
        // This is will perom
        return add*10;
    },[add])
    
    return (
            <div className='compDiv'>
                <div>
                    <Link className='backBtn' to="/learning">Back</Link>
                    <h2>useMemo Hook</h2>
                    <p>The React <span style={{color:'red'}}>useMemo</span> Hook returns a memoized value.</p>
                    <p><span style={{color:'red'}}>useMemo</span> Hook only runs when one of its dependencies update.</p>
                    <p>The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</p>
                </div>
                <hr className='divider'/>
                <div>
                    <h4>Multiple - {multiple} times</h4>
                    <span>{add}</span>
                    <button onClick={()=>setAdd(add+1)}>Add</button>
                    <br/>
                    <span>{minus}</span>
                    <button onClick={()=>setMinus(minus-1)}>Minus</button>
                </div>
                <ExpensiveComponent items={["Delhi","Noida","Pune","Mumbai","Aligarh","Mathura"]} />
            </div>
    )
}
