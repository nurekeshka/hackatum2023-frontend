import React, { useState } from 'react'
import Leader from './Leader'

function Leaderboard({ profile }) {

    const [leaders, setLeaders] = useState([
        {
            id: 1,
            name: "Friedrich Nietzsche",
            pointScore: 512
        },
        {
            id: 2,
            name: "Karl Jung",
            pointScore: 234
        },
        {
            id: 3,
            name: "Johann W. Goethe",
            pointScore: 152
        },
        {
            id: 4,
            name: "Friedrich Schiller",
            pointScore: 18
        },
    ])


    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='dashboard-container w-[65%] mx-auto mt-10'>
                <div className='text-center text-3xl inter-600 pt-5 pb-10'>
                    Leaderboard
                </div>
                <div className=''>
                    {leaders.map((leader, index) => (
                        <Leader index={index + 1} {...leader} />
                    ))}
                    <Leader index={".."} name={'...'} pointScore={'...'} id={'...'} />
                    <Leader index={12} {...profile}  />
                </div>
            </div>
        </div>
    )
}

export default Leaderboard