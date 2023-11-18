import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Issue from './Issue'
import { useNavigate } from 'react-router-dom'


function Issues({ setIssues, setCurIssues, issues }) {

    const navigate = useNavigate()

    return (
        <div className='dashboard-container flex flex-col justify-between'>
            <div className='inter-600 text-xl md:text-2xl text-center mb-4'>
                Issues
            </div>
            <div className='flex-grow'>
                {issues.map((issue, index) => 
                    (index < 4 &&
                        <Issue setIssues={setIssues} setCurIssues={setCurIssues} index={issue.id} {...issue} />
                    )
                )}
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => navigate("/issues")} className='text-sm text-neutral-100 px-3 rounded-full'>
                    See More
                </button>
            </div>
        </div>
    )
}

export default Issues