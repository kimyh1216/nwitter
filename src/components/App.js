import '../App.css';
import React,{useEffect, useState} from 'react';
import Router from 'components/Router'
import {authService} from 'fbase'

function App() {
  const [init,setInit] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [userObj,setUserObj] = useState(null)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true)
        setUserObj(user)
      }else{
        setIsLoggedIn(false)
      }
      setInit(true)
      })
    },[])
  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} /> : 'Initializing...' }
      {/* <footer>&copy; Nwitter {new Date().getFullYear()} </footer> */}
    </div>
  );
}

export default App;
