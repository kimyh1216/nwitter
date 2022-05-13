import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from 'routes/Home'
import Auth from 'routes/Auth'
import Navigation from 'components/Navigation'
import Profile from 'routes/Profile'

const Router = ({ refreshUser, isLoggedIn, userObj }) => {
  console.log(isLoggedIn)
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default Router