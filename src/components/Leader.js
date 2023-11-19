import React from 'react'
import goldenTrophy from './../assets/golden-globe.png'

function Leader({index, id, name, pointScore}) {

    function getState() {
        if (index === 1) {
            return <img className='w-14 h-14' src={goldenTrophy} />
        } else if (index === 2) {
            return "silber-bg"
        } else {
            return (
                <div className={'w-12 h-12 flex justify-center items-center '}>
                    {index + '.'}
                </div>
            )
        }
    }

    return (
        <div className={'py-1.5 overflow-hidden flex justify-between border-b border-neutral-700'}>
            {getState()}
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