import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

function HistoryIssue({ title, description, points }) {
    return (
        <div className='rounded-lg p-2 border border-neutral-600 flex justify-between mb-2'>
            <div className='flex'>
                <div className='rounded-lg h-12 w-12 flex justify-center items-center mr-3 bg-neutral-700'>
                    +{points}
                </div>
                <div>
                    <div className='text-lg'>{title}</div>
                    <div className='text-sm text-neutral-400'>{description}</div>
                </div>
            </div>

            <div className='w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center ml-4'>
                <CheckBadgeIcon className='w-6 h-6' />
            </div>
        </div> 
    )
}

export default HistoryIssue