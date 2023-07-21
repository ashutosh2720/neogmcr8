import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../db/data";
import RSVP from "../components/RSVP";
import { useGlobalMeetup } from "../contexts/meetupContext";

const EventDescription = () => {
    //
    const [isModalopen, setModalOpen] = useState(false);
    const { findEvent, isInRsvp } = useGlobalMeetup()
    const { id } = useParams();
    const event = findEvent(id)
    return (
        <div className="w-full h-full p-5 flex justify-center font-serif">
            <div className="left w-[50%] p-2 flex flex-col gap-3 justify-center ">
                <h1 className="text-4xl font-bold ">{event.title}</h1>
                <h1 className="font-bold text-gray-500">{event.hostedBy}</h1>
                <div>
                    hostedBy<h1 className="font-bold text-gray-500">{event.hostedBy}</h1>
                </div>
                <img
                    src={event.eventThumbnail}
                    alt=""
                    className="w-[100%] rounded-lg"
                />
                <h1 className=" font-serif font-medium">{event.eventDescription}</h1>
                <h1>
                    <span className="font-bold">Dress code</span> :{" "}
                    {event.additionalInformation.dressCode}
                </h1>
                <h1>
                    <span className="font-bold">Age restriction</span> :{" "}
                    {event.additionalInformation.ageRestrictions}
                </h1>

                <div className="tags flex gap-4">
                    {
                        event.eventTags.map(tag => (
                            <p key={tag} className='bg-red-500 text-white p-2 rounded'>{tag}</p>
                        ))
                    }
                </div>
            </div>

            {
                isModalopen && <RSVP setModalOpen={setModalOpen} event={event} />
            }

            <div className="right w-[50%] flex justify-center flex-col rounded-lg items-center gap-10 pt-10">
                <div className="timing shadow-md flex flex-col justify-center items-center gap-3 rounded-lg w-[60%] p-2 ">
                    <p>{new Date(event.eventStartTime).toDateString()} • {new Date(event.eventStartTime).toLocaleTimeString()}  to</p>
                    <p>{new Date(event.eventEndTime).toDateString()} • {new Date(event.eventEndTime).toLocaleTimeString()}</p>
                    <h1>{event.location}</h1>
                    <h1>{event.address}</h1>
                </div>
                <h1 className="text-2xl font-bold">
                    {" "}
                    spekars : {event.speakers.length}
                </h1>
                <div className="flex  gap-5 ">
                    {event.speakers.map((speker) => (
                        <div className="data p-2 rounded-lg shadow-lg">
                            <img
                                src={speker.image}
                                alt=""
                                className="h-[160px] w-[100%] rounded-lg"
                            />
                            <h1 className="text-xl text-gray-500 font-bold">{speker.name}</h1>
                            <h1 className="font-bold">{speker.designation}</h1>
                        </div>
                    ))}
                </div>

                <div className="rsvp">
                    {
                        isInRsvp(event.id) ?
                            <button className='bg-red-300 cursor-not-allowed text-white px-12 min-w-[250px] py-2 rounded'>Already RSVP</button> :
                            <button className='bg-red-500 text-white px-12 min-w-[250px] py-2 rounded' onClick={() => setModalOpen(true)}>RSVP</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default EventDescription;
