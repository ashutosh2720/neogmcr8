import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import EventDescription from "./pages/EventDescription";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventDetails/:id" element={<EventDescription />} />
      </Routes>

    </>
  );
}

export default App;
