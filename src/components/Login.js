import React, { useState } from 'react'

function Login() {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login() {

    }

    return (
        <div className='h-screen bg-neutral-800 overflow-hidden'>
            <div className='h-12 w-[100%]'></div>
            <div className='mx-auto shadow-lg rounded-lg mt-20 w-[90%] lg:w-[36rem] text-sm lg:text-base text-neutral-100 bg-neutral-900'>
                <div className='pt-10 pb-4 text-center text-3xl lg:text-3xl inter-600 '>
                    Login
                </div>
                <div className='px-[36px] inter-500'>
                    <div className='w-[100%]'>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='dark-bg focus:outline-none w-[100%] rounded-lg border border-neutral-700 p-1' />
                    </div>
                    <div className='w-[100%] mt-1'>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Passwort' className='dark-bg focus:outline-none w-[100%] rounded-lg border border-neutral-700 p-1' />
                    </div>
                </div>
                <div className='px-[36px] pb-[20px] pt-1 lg:pt-2'>
                    <button onClick={login} className='w-[100%] p-1.5 rounded-lg bg-blue-400 hover:bg-blue-500 transition-all text-white inter-600'>
                        Login
                    </button>
                    <p className='text-xs lg:text-sm pt-0.5 sm:pt-0 text-blue-600 cursor-pointer hover:underline inter-500'>Passwort vergessen?</p>
                </div>
            </div>
        </div>
    )
}

export default Login