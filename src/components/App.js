import './App.css';
import Router from 'components/Router'
import React, { useEffect, useState } from 'react'
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        })
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  const refreshUser = () => {
    const user = authService.currentUser
    console.log(authService.currentUser)
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    })
  }
  return (
    <>
      {init ? <Router refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initialzing..."}
      <footer>
        &copy; {new Date().getFullYear()} Nwitter. KOREA It Academy Frontend Class. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
