import React, { useState } from 'react'

function IssuesBoard() {

    const [issues, setIssues] = useState([
        {
            id: 1,
            title: 'Index file not found if user is not logged in',
            status: 'working',
            points: '420',
            tags: ["Python"],
            person: "Joseph Eichendorff"
        },
        {
            id: 2,
            title: 'Nothing happens when button x is clicked',
            status: 'review',
            points: '69',
            tags: ["React", "Javascript"],
            person: "Wolfgang Goethe"
        },
        {
            id: 3,
            title: 'Error 404: Page not found on user profile',
            status: 'review',
            points: '75',
            tags: ["React, Javascript"],
            person: "Friedrich Nietzsche"
        },
        {
            id: 4,
            title: 'Enhancement: Add dark mode to the dashboard',
            status: '',
            points: '16',
            tags: ["CSS, HTML"],
            person: "Thomas Mann"
        },
        {
            id: 5,
            title: 'Bug: App crashes when uploading large files',
            status: 'done',
            points: '52',
            tags: ["Python", "Javascript"],
            person: "Friedrich Nietzsche"
        }
    ])



    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='dashboard-container w-[85%] mx-auto mt-10'>
                <div className='text-center text-3xl inter-600'>
                    Issues Board
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default IssuesBoard