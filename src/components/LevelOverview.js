import React from 'react'

function LevelOverview({ level, exp, pointScore }) {

    function determineMaxExp(lvl) {
        return 100 + lvl * 50
    }

    return (
        <div className='dashboard-container'>
            <div className='text-center flex justify-between pt-2'>
                <div className='mx-10'>
                    <div className='text-xs'>Your Level:</div>
                    <div className='text-4xl inter-600'>{level}</div>
                </div>
                <div className='mx-10'>
                    <div className='text-xs'>Your Points:</div>
                    <div className='text-4xl inter-600'>{pointScore} P</div>
                </div>
            </div>
            <div className='pt-5 pb-2 relative'>
                <div className='w-[100%] flex justify-end absolute z-10'>
                    <span className='text-right text-sm bg-blue-700 rounded-full mb-0.5 px-3 py-0.5'>+10p</span>
                </div>
                <div className='h-[4px] bg-blue-700 rounded-full overflow-hidden relative my-2.5'>
                    <div style={{ "width": (exp * 100 / determineMaxExp(level)) + "%" }} className='bg-blue-400 w-[72%] h-full'></div>
                </div>
            </div>
        </div>
    )
}

export default LevelOverview