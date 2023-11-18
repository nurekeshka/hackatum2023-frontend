import React, { useState } from 'react'
import HistoryIssue from './HistoryIssue'

function IssuesHistory() { 

    const [historyIssues, setHistoryIssues] = useState([
        {
            id: 5,
            title: 'Index file not found if user is not logged in',
            status: 'in progress',
            description: 'There has been some issue with the index file, always when...',
            points: '420'
        },
        {
            id: 6,
            title: 'Nothing happens when button x is clicked',
            status: 'pending',
            description: 'On path /home/nope the submit button doesnt do anything...',
            points: '69'
        }
    ])

    return (
        <div className='dashboard-container'>
            <div className='inter-600 text-2xl text-center mb-4'>
                Issues History
            </div>
            <div>
                {historyIssues.map((historyIssue) => 
                    <HistoryIssue {...historyIssue} />
                )}
            </div>
        </div>
    )
}

export default IssuesHistory