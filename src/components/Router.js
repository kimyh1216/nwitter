import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from 'routes/Auth'
import Home from 'routes/Home'
import Profile from 'routes/Profile'
import Navigation from "./Navigation";

const Router = ({isLoggedIn, userObj}) =>{
    return(
        <BrowserRouter>
        {isLoggedIn && <Navigation />}
                <Routes>
                {isLoggedIn ?(
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile />} />
                    </>
                    ) : (
                    <Route path="/" element={<Auth />} />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router