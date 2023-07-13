import React from 'react'

const Nav = () => {
    return (
        <div className='w-full bg-cyan-800 p-4 flex justify-between'>
            <div className="logo">
                <h1 className=' font-bold text-2xl text-white font-serif '>Meetup</h1>
            </div>
            <div className="search">
                <input type="search" placeholder='Search by event title and tags....' name="" id="" className='rounded-md first-letter: p-1 pl-2 border border-gray-200 ' />
            </div>

        </div>
    )
}

export default Nav
