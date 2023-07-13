import React, { createContext, useContext, useState } from "react";

const meetupContext = createContext();

const MeetupProvider = ({ children }) => {




    return (
        <meetupContext.Provider
            value={{

            }}
        >
            {children}
        </meetupContext.Provider>
    );
};

const useGlobalMeetup = () => useContext(meetupContext);

export { MeetupProvider, useGlobalMeetup };
