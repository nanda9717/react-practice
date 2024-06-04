import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LearnUseState from '../../../components/learn/LearnUseState';
import Timer from '../../../components/learn/Timer';
import LearnUseEffect from '../../../components/learn/LearnUseEffect';
import LearnUseMemo from '../../../components/learn/LearnUseMemo';
import LearnUseCallback from '../../../components/learn/LearnUseCallback';
import LearnUseRef from '../../../components/learn/LearnUseRef';
import SortingTask from '../../../components/learn/SortingTask';

export default function Index() {
    const [slug, setSlug] = useState('');
    const params = useParams();
    useEffect(()=>{
        setSlug(params.topic);
    },[params])
    return (
        <div>
            { slug === 'timer' && <Timer /> }   
            { slug === 'useState' && <LearnUseState /> } 
            { slug === 'useEffect' && <LearnUseEffect /> } 
            { slug === 'useMemo' && <LearnUseMemo /> } 
            { slug === 'useCallback' && <LearnUseCallback /> }
            { slug === 'useRef' && <LearnUseRef /> }  
            { slug === 'sorting' && <SortingTask /> }  
        </div>
    )
}
