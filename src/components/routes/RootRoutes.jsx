import React from 'react'
import { Route, Routes } from "react-router-dom";
// COMPONENTS
import Home from "../../mainPages/Home";
import Courses from "../../mainPages/Courses";
import Pages from "../../mainPages/Pages";
import Events from "../../mainPages/Events";
import Contact from "../../mainPages/Contact";

const RootRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default RootRoutes