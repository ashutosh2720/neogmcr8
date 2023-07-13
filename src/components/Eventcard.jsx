import React from 'react'
import { useNavigate } from 'react-router-dom'

const Eventcard = ({ meeting }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[300px] h-[300px] p-2 rounded-lg justify-start  shadow-md cursor-pointer ' onClick={() => navigate(`/eventDetails/${meeting.id}`)}>
            <img src={meeting.eventThumbnail} alt="" className='h-[60%] w-[100%]' />
            <h1 className='relative font-bold text-black bottom-[172px] rounded-sm bg-white inline '>{meeting.eventType}</h1>
            <h1>{meeting.eventStartTime}</h1>
            <h1 className='font-bold text-xl'>{meeting.title}</h1>

        </div>
    )
}

export default Eventcard
