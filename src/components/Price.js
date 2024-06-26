import { BanknotesIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Price({ priceImg, title, subtitle, pricePoints }) {

    async function redeemPrice() {

    }

    return (
        <div className='w-auto object-cover p-1 shadow-basic border border-neutral-700 rounded-lg'>
            <div className=''>
                <img className='rounded-lg object-cover w-[100%] h-60' src={priceImg} />
            </div>
            <div className=''>
                <div className='text-center mt-2 mb-3'>
                    <span className='text-xl block'>{title}</span>
                    <span className='text-xs block text-neutral-400'>{subtitle}</span>
                </div>
                <button onClick={redeemPrice} className='bg-red-400 text-base rounded-lg w-[100%] p-1 transition-all flex items-center justify-center'>
                    {pricePoints}
                    <BanknotesIcon className='w-4 h-4 inline ml-1.5' />
                </button>
            </div>
        </div>
    )
}

export default Price