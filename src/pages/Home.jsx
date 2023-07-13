import React from 'react'
import { data } from '../db/data'
import Eventcard from '../components/Eventcard'

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col gap-5 p-3'>
            <div className="heading-filter w-[100%] flex justify-between">
                <h1 className='text-2xl font-serif font-bold'>MeetUp events</h1>
                <select name="" id="" className='bg-cyan-700 rounded-md text-white cursor-pointer'>
                    <option value="">online</option>
                    <option value="">offline</option>
                </select>
            </div>

            <div className="meetups flex  flex-wrap">
                {
                    data.meetups.map((meeting) =>
                        <Eventcard meeting={meeting} />
                    )
                }
            </div>
        </div>
    )
}

export default Home
