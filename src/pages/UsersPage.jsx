import React, { useState, useEffect } from 'react';
import '../components/cyberChallenges/styles/title.css'
import UsersSearchBar from '../components/users/UsersSearchBar';
import Navbar from '../components/sideBarAdmin/Navbar';
import Logo from '../components/logoImage/Logo';

export const UsersPage = () => {

    const [users, setUsers] = useState([]);

    // Aquí más bien tengo que realizar la llamada al API para que me devuleva los usuarios.

    // Usuarios de prueba
    useEffect(() => {

    const list_users = [
        {
            ID: 0,
            Nickname: "Pablo",
            Carnet: 2018345623,
            Player: "Student",
        },
        {
            ID: 1,
            Nickname: "Briana",
            Carnet: 2018102426,
            Player: "Admin",
        },
        {
            ID: 3,
            Nickname: "Josué",
            Carnet: 2018152678,
            Player: "Student",
        },
    ];

    setUsers(list_users);

    }, []);

  return (
    <>
    <Navbar/>
    <Logo />
    <div className="title-div">
        <h1 className="title-h1"> Users </h1>
    </div>
    <UsersSearchBar users={users} />
    </>
  )
}
