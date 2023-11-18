import React, { useState } from 'react'
import Issues from './Issues'
import LevelOverview from './LevelOverview'
import CurrentIssues from './CurrentIssues'

function Dashboard({ profile }) {

    const [issues, setIssues] = useState([
        {
            id: 1,
            title: 'Index file not found if user is not logged in',
            status: 'in progress',
            description: 'There has been some issue with the index file, always when...',
            points: '420'
        },
        {
            id: 2,
            title: 'Nothing happens when button x is clicked',
            status: 'pending',
            description: 'On path /home/nope the submit button doesnt do anything...',
            points: '69'
        }
    ])

    const [curIssues, setCurIssues] = useState([
        {
            id: 3,
            title: 'Index file not found if user is not logged in',
            status: 'in progress',
            description: 'There has been some issue with the index file, always when...',
            points: '420'
        },
        {
            id:4,
            title: 'Nothing happens when button x is clicked',
            status: 'pending',
            description: 'On path /home/nope the submit button doesnt do anything...',
            points: '69'
        } 
    ])


    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='md:mt-20 p-8 lg:flex justify-evenly'>
                <div className='md:mx-4'>
                    <LevelOverview {...profile} />
                    <CurrentIssues setCurIssues={setCurIssues} curIssues={curIssues} />
                </div>
                <Issues setCurIssues={setCurIssues} setIssues={setIssues} issues={issues} />
            </div>
        </div>
    )
}

export default Dashboard