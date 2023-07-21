import React from 'react'
import { useGlobalMeetup } from '../contexts/meetupContext'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const { searchInputHandler } = useGlobalMeetup()
    const navigate = useNavigate()
    return (
        <div className='w-full bg-cyan-800 p-4 flex justify-between'>
            <div className="logo">
                <h1 className=' font-bold text-2xl text-white font-serif '>Meetup</h1>
            </div>
            <div className="search">
                <input type="search" placeholder='Search by event title and tags....' name="" id="" onChange={searchInputHandler} className='rounded-md first-letter: p-1 pl-2 border border-gray-200 ' />
            </div>

        </div>
    )
}

export default Nav
