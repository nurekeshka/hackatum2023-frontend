import React, { useState } from 'react'
import Leader from './Leader'
import FirstPlaceLeader from './FirstPlaceLeader'
import crown from './../assets/crown.png'
import bronzeMedal from './../assets/bronze-medal-2.png'
import silverMedal from './../assets/silver-medal-2.png'

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
        {
            id: 4,
            name: "Karls Ess",
            pointScore: 11
        },
    ])


    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='dashboard-container w-[90%] md:w-[65%] mx-auto mt-10'>
                <div className='text-center text-3xl inter-600 pt-5 pb-10'>
                    Leaderboard
                </div>
                <div className='h-[14rem] flex justify-center items-end'>
                    <div className='w-1/6 relative'>
                        <img className='w-16 h-16 mx-auto relative -bottom-4' src={silverMedal} /> 
                        <div className='w-[100%] h-24 bg-neutral-700 rounded-lg rounded-r-none border-2 border-r-0 border-neutral-300 flex flex-col justify-center items-center text-center p-2'>
                            <span>
                                {leaders[1].name}
                            </span>
                            <span className='text-xs text-neutral-400'>
                                {leaders[1].pointScore}
                            </span>
                        </div>
                    </div>
                    <div className='w-1/6'>
                        <img className='w-16 h-16 mx-auto' src={crown} />
                        <div className='w-[100%] h-40 bg-neutral-700 rounded-t-lg shadow-basic relative z-10 border-2 border-orange-300 flex flex-col justify-center items-center text-center p-2'>
                        <span>
                                {leaders[0].name}
                            </span>
                            <span className='text-xs text-neutral-400'>
                                {leaders[0].pointScore}
                            </span>
                        </div>   
                    </div>
                    <div className='w-1/6 relative'>
                        <img className='w-16 h-16 mx-auto relative -bottom-4' src={bronzeMedal} />
                        <div className='w-[100%] h-20 bg-neutral-700 rounded-lg rounded-l-none border-2 border-l-0 border-yellow-800 flex flex-col justify-center items-center text-center p-2'>
                            <span>
                                {leaders[2].name}
                            </span>
                            <span className='text-xs text-neutral-400'>
                                {leaders[2].pointScore}
                            </span>
                        </div>  
                    </div>
                </div>
                <div className='mt-4'>

                    {leaders.map((leader, index) => (
                        index > 3 &&
                        <Leader index={index} {...leader} />
                    ))}
                    <Leader index={".."} name={'...'} pointScore={'...'} id={'...'} />
                    <Leader index={12} {...profile}  />
                </div>
            </div>
        </div>
    )
}

export default Leaderboard