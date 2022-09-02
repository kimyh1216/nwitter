import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from 'routes/Auth'
import Home from 'routes/Home'
import Navigation from "./Navigation";

const Router = ({isLoggedIn}) =>{
    return(
        <BrowserRouter>
            <Routes>
                {isLoggedIn ? (<Route path="/" element={<Navigation />} />) : '' }
                {isLoggedIn ?(
                    <Route path="/" element={<Home />} />
                    ) : (
                    <Route path="/" element={<Auth />} />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router