import React, { useState } from 'react'
import shirtPlaceholder from '../assets/ShirtPlaceholder.jpeg'
import hatPlaceholder from '../assets/hatPlaceholder.jpg'
import socksPlaceholder from '../assets/socksPlaceholder.jpg'
import beanniePlaceholder from '../assets/beanniePlaceholder.jpg'
import Price from './Price'

function Redeem() {

    const [prices, setPrices] = useState([
        {
            title: "HackaTUM Beannie",
            subtitle: "Comes in Black and Blue",
            priceImg: beanniePlaceholder,
            pricePoints: "100 P"
        },
        {
            title: "HackaTUM Socks",
            subtitle: "Comes in Black and Blue",
            priceImg: socksPlaceholder,
            pricePoints: "100 P"
        },
        {
            title: "HackaTUM Hat",
            subtitle: "Comes in Black and Blue",
            priceImg: hatPlaceholder,
            pricePoints: "100 P"
        }
    ])

    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='p-8 lg:flex justify-evenly'>
                <div className='dashboard-container w-auto max-w-[80%] px-10'>
                    <div className='inter-600 text-2xl text-center mb-4'>
                        Redeem Points
                    </div>
                    <div>
                        <div className='flex gap-x-4'>
                            {prices.map(price => (
                                <Price {...price} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Redeem