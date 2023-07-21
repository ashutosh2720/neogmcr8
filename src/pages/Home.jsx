import React from 'react'
import { data } from '../db/data'
import Eventcard from '../components/Eventcard'
import { useGlobalMeetup } from '../contexts/meetupContext'
const Home = () => {
    const { filteredEvents, setSelectedEventType } = useGlobalMeetup()
    return (
        <div className='w-full h-full flex flex-col gap-5 p-3'>
            <div className="heading-filter w-[100%] flex justify-between">
                <h1 className='text-2xl font-serif font-bold'>MeetUp events</h1>
                <select name="" id="" className='bg-cyan-700 rounded-md text-white cursor-pointer' onChange={(e) => setSelectedEventType(e.target.value)}>
                    <option value="both" >both</option>
                    <option value="Online" >Online</option>
                    <option value="Offline">Offline</option>
                </select>
            </div>

            <div className="meetups flex  flex-wrap">
                {
                    filteredEvents.length ?
                        filteredEvents.map(event => (
                            <Eventcard key={event.id} event={event} />
                        )) :
                        <p className='text-xl text-black/30 w-full md:min-h-[60vh] flex items-center justify-center py-4'>No Event Found for your Search</p>
                }
            </div>
        </div>
    )
}

export default Home
