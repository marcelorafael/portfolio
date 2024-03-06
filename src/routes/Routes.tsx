import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home'

const RoutesProject = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;