import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CurrentIssue({setCurIssues, id, points, title, description, status}) {
    
    async function finishIssue() {
        console.log(id)
        setCurIssues(prev => {
            console.log(prev)
            prev.find(prevIssue => prevIssue.id === id).status = "pending"
            return [...prev]
        })
    }
    
    return (
        <div key={id} className='rounded-lg p-2 border border-neutral-600 flex items-center justify-between mb-2'>
            <div className='flex items-center'>
                <div className='rounded-lg h-12 w-12 flex justify-center items-center mr-3 bg-neutral-700 text-xs md:text-base'>
                    {points}
                </div>
                <div className='cursor-pointer'>
                    <div className='text-base md:text-lg'>{title}</div>
                    <div className='text-xs md:text-sm text-neutral-400'>{description}</div>
                </div>
            </div>
            
            {status === 'in progress' &&
                <button onClick={finishIssue} className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-105  ml-4'>
                    <CheckIcon className='w-6 h-6' />
                </button>
            }
            {status === 'pending' &&
                <div className='w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center hover:scale-105  ml-4'>
                    <ClockIcon className='w-6 h-6' />
                </div>
            }
        </div> 
    )
}

export default CurrentIssue