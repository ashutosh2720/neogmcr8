import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../db/data";
import RSVP from "../components/RSVP";

const EventDescription = () => {
    const [isModalopen, setModalOpen] = useState(false);
    const { id } = useParams();
    const event = data.meetups.find((item) => item.id === id);
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
                <h1 className="">{event.eventDescription}</h1>
                <h1>
                    <span className="font-bold">Dress code</span> :{" "}
                    {event.additionalInformation.dressCode}
                </h1>
                <h1>
                    <span className="font-bold">Age restriction</span> :{" "}
                    {event.additionalInformation.ageRestrictions}
                </h1>
            </div>

            {
                isModalopen && <RSVP />
            }

            <div className="right w-[50%] flex justify-center flex-col rounded-lg items-center gap-10 pt-10">
                <div className="timing shadow-md flex flex-col justify-center items-center gap-3 rounded-lg w-[60%] p-2 ">
                    <h1>{event.eventStartTime}</h1>
                    <h1>{event.eventEndTime}</h1>
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

                <button
                    className=" bg-orange-600  rounded-md text-white pt-2 pb-2 font-bold pl-4 pr-4"
                    onClick={() => setModalOpen(!isModalopen)}
                >
                    RSVP
                </button>
            </div>
        </div>
    );
};

export default EventDescription;
