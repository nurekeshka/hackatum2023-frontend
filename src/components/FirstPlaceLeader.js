import React from 'react'

function FirstPlaceLeader({id, name, pointScore}) {
    return (
        <div className={'mb-2 overflow-hidden flex justify-between border-b border-neutral-700'}>
            <div className={'w-12 h-12 flex justify-center items-center '}>
                1.
            </div>
            <div className='text-lg flex items-center'>
                {name}
            </div>
            <div className='flex items-center px-2'>
                {pointScore}
            </div>
        </div>
    )
}

export default FirstPlaceLeader