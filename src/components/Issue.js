import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Issue({ setCurIssues, setIssues, id, points, title, description}) { 

    async function claimIssue() {
        setCurIssues(prev => [...prev, {id, points, title, description, status: "in progress"}])
        setIssues(prev => prev.filter(prevIssue => prevIssue.id !== id))
    }

    return (
        <div className='rounded-lg p-2 border border-neutral-600 flex justify-between mb-2'>
            <div className='flex'>
                <div className='rounded-lg h-12 w-12 flex justify-center items-center mr-3 bg-neutral-700'>
                    {points}
                </div>
                <div>
                    <div className='text-lg'>{title}</div>
                    <div className='text-sm text-neutral-400'>{description}</div>
                </div>
            </div>

            <button onClick={claimIssue} className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-105 ml-4'>
                <CheckIcon className='w-6 h-6' />
            </button>
        </div> 
    )
}

export default Issue