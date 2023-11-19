import React, { useState } from 'react'
import shirtPlaceholder from '../assets/ShirtPlaceholder.jpeg'
import hatPlaceholder from '../assets/hatPlaceholder.jpg'
import socksPlaceholder from '../assets/socksPlaceholder.jpg'
import beanniePlaceholder from '../assets/beanniePlaceholder.jpg'
import Price from './Price'
import { ArrowLeftIcon, ArrowRightIcon, BanknotesIcon, PlusIcon } from '@heroicons/react/24/outline'
import pricePlaceholder from '../assets/prizePlaceholder.png'
import prize from '../assets/prize.png'

function Redeem() {

    const [showPriceForm, setShowPriceForm] = useState(false)

    const [prices, setPrices] = useState([
        {
            title: "HackaTUM Beannie",
            subtitle: "Comes in Black and Blue",
            priceImg: beanniePlaceholder,
            pricePoints: 55
        },
        {
            title: "HackaTUM Socks",
            subtitle: "Comes in Black and Blue",
            priceImg: socksPlaceholder,
            pricePoints: 35
        },
        {
            title: "HackaTUM Hat",
            subtitle: "Comes in Black and Blue",
            priceImg: hatPlaceholder,
            pricePoints: 50
        }
    ])

    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [prizeImage, setPrizeImage] = useState(pricePlaceholder)


    return (

        <div className='md:h-screen bg-neutral-800 md:overflow-hidden relative py-10'>
            {showPriceForm &&
                <div className='bg-neutral-800 rounded-lg text-neutral-100 inter-500 shadow-sm shadow-neutral-800 p-8 absolute top-0 bottom-0 right-0 left-0 m-auto h-max w-[70%] max-w-[45rem] z-[100]'>
                    <div className=' text-center inter-600 text-3xl'>
                        Add New Prize
                    </div>
                    <div className='flex pt-9'>
                        <div className='rounded-lg border border-neutral-700 w-max mr-6 shrink-0 bg-neutral-100 overflow-hidden'>
                            <label htmlFor='prizeImg' className='cursor-pointer'>
                                <div className='bg-white p-6'>
                                    <img className='w-48 h-48' src={prize} />
                                </div>
                            </label>
                            <input id='prizeImg' type='file' className='hidden' />  
                        </div>
                        <div className='flex flex-col justify-between gap-y-1 flex-grow'>
                            <div>
                                <div className='flex flex-col mb-2'>
                                    <span className='text-xs mx-0.5'>Title</span>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} className=' focus:outline-none border-b border-neutral-700 p-1 pb-[1px] text-lg transparent-bg w-[100%] mb-1' placeholder='Super Cool Shirt' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs mx-0.5'>Subtitle</span>
                                    <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} className=' focus:outline-none border-b border-neutral-700 p-1 pb-[1px] text-base transparent-bg w-[100%]' placeholder='Comes in green, black and white' />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-xs mx-0.5'>Value</span>
                                    <input placeholder='0' className='focus:outline-none p-1 pb-[1px] dark-bg w-16 pb-[1px] border-b border-neutral-700 mr-1' />
                                </div>
                                <button className='py-1.5 px-6 bg-blue-500 rounded-lg'>Submit</button>
                            </div>
                        </div>
                    </div>  
                </div>
            }
            {showPriceForm && <div onClick={() => setShowPriceForm(false)} className='h-[100%] w-[100%] absolute z-50 bg-black/70'></div>}


            <div className='h-12 w-[100%]'></div>
            <div className='dashboard-container pb-10 w-[90%] lg:w-[60rem] mx-auto'>
                <div className='text-center text-3xl inter-600 mt-1 mb-6 relative'>
                    Get Prizes
                    <div className='top-0 right-0 text-base ld:text-xl absolute py-0.5  lg:py-1.5 px-2 lg:px-4 bg-green-500 rounded-lg flex items-center justify-between'>
                        100 
                        <BanknotesIcon className='w-5 h-5 inline ml-1.5' />
                    </div>
                </div>

                <div>
                    <div className='flex flex-col md:justify-center md:flex-row gap-y-4 gap-x-0 md:gap-y-0 md:gap-x-3 lg:gap-x-5'>
                        <div className='items-center hidden md:flex'>
                            <button className='p-2 bg-neutral-700 rounded-full flex items-center justify-center'>
                                <ArrowLeftIcon className='w-6 h-6' />
                            </button>
                        </div>
                        {prices.map(price => (
                            <Price {...price} />
                        ))}
                        <div className='items-center hidden md:flex relative'>
                            <button className='p-2 bg-neutral-700 rounded-full flex items-center justify-center'>
                                <ArrowRightIcon className='w-6 h-6' />
                            </button>
                            <button onClick={() => setShowPriceForm(true)} className='p-2 bg-green-500 rounded-full flex items-center justify-center absolute bottom-0'>
                                <PlusIcon className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Redeem