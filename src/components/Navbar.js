import { BanknotesIcon, ChartBarIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    return (
        <div className='w-[100%] bg-neutral-900 h-12 fixed text-neutral-100 shadow-lg flex justify-between'>
            <div onClick={() => navigate("/")} className='flex items-center h-[100%] px-2.5 cursor-pointer'>
                <span className='inter-700 text-xl'>PlayDev.</span>
            </div>
            <div className='h-full flex justify-center items-center pr-6'>
 
                
                <button onClick={() => navigate("/")} className='nav-btn mr-4'>
                    <Squares2X2Icon className='btn-icon' />
                    Dashboard
                </button>
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
            </div>
        </div>
    )
}

export default Navbar