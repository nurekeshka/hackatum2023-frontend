import React from 'react'

function Leader({index, id, name, pointScore}) {
    return (
        <div className='mb-2 border rounded-lg border-neutral-700 overflow-hidden flex justify-between'>
            <div className='w-12 h-12 bg-neutral-700 flex justify-center items-center'>
                {index + '.'}
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

export default Leader