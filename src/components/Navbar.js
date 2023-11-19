import { BanknotesIcon, Bars3Icon, ChartBarIcon, ChevronRightIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import strawberry from './../assets/strawberry.png'

function Navbar() {

    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState("")

    return (
        <div className='w-[100%] bg-neutral-900 h-12 fixed text-neutral-100 shadow-lg flex justify-between z-20'>
            <div onClick={() => navigate("/")} className='flex items-center h-[100%] px-2.5 cursor-pointer'>
                <img className='inline object-cover w-8 h-8 ml-1 mr-3' src={strawberry} />
                <span className='inter-700 text-xl'>
                    <span className='text-neutral-100'>Straw</span>
                    <span className='text-red-400'>Berry</span>
                </span>
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
                <button onClick={() => {navigate("/leaderboard"); setSelectedMenu("leaderboard")}} className={'nav-btn mr-4 ' + (selectedMenu === "leaderboard" && "text-red-400")}>
                    <ChartBarIcon className='btn-icon' />
                    Leaderboard
                </button>
                <button onClick={() => {navigate("/redeem"); setSelectedMenu("redeem")}} className={'nav-btn mr-4 ' + (selectedMenu === "redeem" && "text-red-400")}>
                    <BanknotesIcon className='btn-icon' />
                    Redeem
                </button>
                <button onClick={() => {navigate("/profile"); setSelectedMenu("profile")}} className={'nav-btn ' + (selectedMenu === "profile" && "text-red-400")}>
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