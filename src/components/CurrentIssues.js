import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import CurrentIssue from "./CurrentIssue"


function CurrentIssues({ setCurIssues, curIssues }) {

    return (
        <div className='dashboard-container'>
            <div className='inter-600 text-2xl text-center mb-4'>
                Claimed Issues
            </div>
            <div>
                {curIssues?.map(curIssue => (
                    <CurrentIssue key={curIssue.id} setCurIssues={setCurIssues} {...curIssue} />
                ))}

            </div>
        </div>
    )
}

export default CurrentIssues