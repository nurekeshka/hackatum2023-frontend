import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import CurrentIssue from "./CurrentIssue"
import { useNavigate } from 'react-router-dom'


function CurrentIssues({ setCurIssues, curIssues }) {

    const navigate = useNavigate()

    return (
        <div className='dashboard-container flex flex-col justify-between'>
            <div className='inter-600 text-xl md:text-2xl text-center mb-4'>
                Claimed Issues
            </div>
            <div>
                {curIssues?.map((curIssue, index) => (
                    index < 2 &&
                    <CurrentIssue key={curIssue.id} setCurIssues={setCurIssues} {...curIssue} />
                ))}

            </div>
            <div className='flex justify-center items-center mt-2'>
                <button onClick={() => navigate("/issues")} className='text-sm text-neutral-100 px-3 rounded-full'>
                    See More
                </button>
            </div>
        </div>
    )
}

export default CurrentIssues