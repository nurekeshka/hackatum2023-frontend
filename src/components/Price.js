import React from 'react'

function Price({ priceImg, title, subtitle, pricePoints }) {

    async function redeemPrice() {

    }

    return (
        <div className='w-auto object-cover p-1 shadow-basic border border-neutral-700 rounded-lg'>
            <div className=''>
                <img className='rounded-lg w-60 h-60' src={priceImg} />
            </div>
            <div className=''>
                <div className='text-center mt-1 mb-3'>
                    <span className='text-xl block'>{title}</span>
                    <span className='text-xs block text-neutral-400'>{subtitle}</span>
                </div>
                <button onClick={redeemPrice} className='bg-blue-500 text-base rounded-lg w-[100%] p-1 transition-all'>{pricePoints}</button>
            </div>
        </div>
    )
}

export default Price