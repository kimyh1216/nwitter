import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const onLogoutClick = () =>{
        authService.signOut()
        navigate('/')
    }
    return(
        <div>
            <button onClick={onLogoutClick}>Log out</button>
        </div>
    )
}

export default Profile