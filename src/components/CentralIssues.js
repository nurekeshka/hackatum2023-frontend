import React from 'react'
import Issues from './Issues'
import Issue from './Issue'

function CentralIssues({ issues, setIssues, setCurIssues }) {
    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='dashboard-container w-[90%] lg:w-[50rem] mx-auto mt-10'>
                <div className='text-center text-3xl inter-600 mt-1 mb-6'>
                    Issues Board
                </div>
                <div className='overflow-y-auto'>
                    {issues.map((issue, index) => (
                        <Issue index={index} {...issue} setIssues={setIssues} setCurIssues={setCurIssues} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CentralIssues