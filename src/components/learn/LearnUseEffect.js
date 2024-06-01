import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LearnUseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    useEffect(()=>{
        console.log('Component mount when no dependency passed');
        /* It will call on first time rendering or if any state gets update innside component. */
    });
    useEffect(()=>{
        console.log('Component mount with an empty array:');
        /* It will call on first time rendering only. */
    },[]);
    useEffect(()=>{
        console.log('Component mount with dependency');
        /* It will call on first time rendering or if dependency value will change. */
    },[data]);
    return (
        <div className='compDiv'>
            <div>
                <Link className='backBtn' to="/learning">Back</Link>
                <h2>useEffect Hook</h2>
                <p>The React <span style={{ color: 'red' }}>useEffect</span> Hook is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.</p>
                <p><span style={{ color: 'red' }}>useEffect</span> accepts two arguments. The second arguments is optional.</p>
            </div>
            <hr className='divider' />
            <div>
                <h4>Button Clicked {count} times</h4>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <h4>Data {data} times</h4>
                <button onClick={() => setData(data + 1)}>Click</button>
            </div>
        </div>
    )
}
