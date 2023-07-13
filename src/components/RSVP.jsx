import React from 'react'

function RSVP() {
    return (
        <div className='w-[30%] top-60 p-5 fixed bg-white justify-center items-center shadow-lg rounded-lg flex-flex-col'>
            <h1 className='text-3xl text-center'>complete your RSVP</h1>
            <h1 className='text-gray-500 text-center'>fill in your personal information</h1>

            <form action="" className='w-[full] flex flex-col justify-center items-center p-5'>
                <label htmlFor="">Name : </label>
                <input type="text" name="" id="" className='border-black  border rounded-md p-1' />
                <label htmlFor="">Email : </label>
                <input type="email" name="" id="" className='border-black border rounded-md p-1 ' />
                <h1>you have to make payment at the venue</h1>
                <button className=' bg-orange-600  rounded-md text-white pt-2 pb-2 font-bold pl-4 pr-4'>RSVP</button>
            </form>

        </div>
    )
}

export default RSVP
