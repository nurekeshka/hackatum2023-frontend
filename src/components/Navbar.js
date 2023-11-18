import { BanknotesIcon, Bars3Icon, ChartBarIcon, ChevronRightIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className='w-[100%] bg-neutral-900 h-12 fixed text-neutral-100 shadow-lg flex justify-between z-20'>
            <div onClick={() => navigate("/")} className='flex items-center h-[100%] px-2.5 cursor-pointer'>
                <span className='inter-700 text-xl'>PlayDev.</span>
            </div>
            <div onClick={() => setShowSidebar(true)} className='md:hidden p-2'>
                <Bars3Icon className='w-8 h-8' />
            </div>
            <div className={'absolute h-screen w-56 bg-neutral-800 z-20 md:bg-transparent md:flex md:w-auto md:h-full justify-center items-center md:pr-6 ' + (showSidebar ? " right-0" : " -right-[250px] md:right-0 ")}>     
                {/* <button onClick={() => navigate("/")} className='nav-btn mr-4'>
                    <Squares2X2Icon className='btn-icon' />
                    Dashboard
                </button> */}

                <div className='md:hidden h-12'>

                </div>
                <button onClick={() => navigate("/leaderboard")} className='nav-btn mr-4'>
                    <ChartBarIcon className='btn-icon' />
                    Leaderboard
                </button>
                <button onClick={() => navigate("/redeem")} className='nav-btn mr-4'>
                    <BanknotesIcon className='btn-icon' />
                    Redeem
                </button>
                <button onClick={() => navigate("/profile")} className='nav-btn'>
                    <UserCircleIcon className='btn-icon' />
                    Profile
                </button>   
                <button onClick={() => setShowSidebar(false)} className='w-[100%] py-1.5 md:hidden mt-[50%] flex justify-center items-center'>
                    <ChevronRightIcon className='w-5 h-5' />
                </button>

                {/* <button onClick={() => setShowSidebar(false)} className='w-[100%] py-1.5 md:hidden mt-20 flex justify-center items-center'>
                    <ChevronRightIcon className='w-5 h-5' />
                </button> */}
            </div>
        </div>
    )
}

export default Navbar