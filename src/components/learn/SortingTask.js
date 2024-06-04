import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SortingTask() {
    const [data, setData] = useState([
                                        {
                                            title:'ABC 1',
                                            upvotes:23,
                                            date:'2020-03-12'
                                        },
                                        {
                                            title:'ABC 2',
                                            upvotes:30,
                                            date:'2021-01-12'
                                        },
                                        {
                                            title:'ABC 3',
                                            upvotes:3,
                                            date:'2020-10-20'
                                        },
                                        {
                                            title:'ABC 4',
                                            upvotes:20,
                                            date:'2024-05-30'
                                        },
                                        {
                                            title:'ABC 5',
                                            upvotes:12,
                                            date:'2022-09-02'
                                        },
                                        {
                                            title:'ABC 6',
                                            upvotes:22,
                                            date:'2023-08-25'
                                        }
                                    ])

    useEffect(() => {
        (async ()=>{
            let newData = [...data];
            newData.sort((a,b) => b.upvotes - a.upvotes);
            setData(newData);
            let name = await fetchData();
            console.log(name);
        })()
    },[]);

    const fetchData = async () => {
        let res = await fetch('https://jsonmock.hackerrank.com/api/countries?page=1').then(response=> response.json()).then((data)=>{
            return data;
        });
        console.log(res,'response')
        return res.data[0].name;
    }

    const handleMostVotes = () => {
        let newData = [...data];
        newData.sort((a,b) => b.upvotes - a.upvotes);
        console.log(newData, '=new data, votes')
        setData(newData);
    }

    const handleRecentRecord = () => {
        let newData = [...data];
        newData.sort((a,b) => (new Date(b.date)) - (new Date(a.date)));
        console.log(newData, '=new data, recent')
        setData(newData);
    }

    return (
        <div className='compDiv'>
            <div>
                <Link className='backBtn' to="/learning">Back</Link>
                <h2>Sort Data</h2>
            </div>
            <hr className='divider' />
            <div>
                <div>
                    <button onClick={handleMostVotes}>Most Votes</button>
                    <button onClick={handleRecentRecord}>Recent Record</button>
                </div>
                <div>
                    <table cellPadding={10} cellSpacing={1} border={1}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Upvotes</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 && data.map((row,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{row.title}</td>
                                            <td>{row.upvotes}</td>
                                            <td>{row.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
