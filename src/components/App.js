import '../App.css';
import React,{useState} from 'react';
import Router from 'components/Router'
import {authService} from 'fbase'

function App() {
  console.log(authService.currentUser)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()} </footer>
    </div>
  );
}

export default App;
