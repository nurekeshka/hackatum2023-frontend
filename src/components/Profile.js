import React from 'react'
import IssuesHistory from './IssuesHistory'

function Profile() {
    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='p-8 lg:flex justify-evenly'>
                <IssuesHistory />
            </div>
        </div>
    )
}

export default Profile