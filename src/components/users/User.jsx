import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import './user.css';

const User = ({ID, Nickname, Carnet, Player}) => {

    const [showEditPanel, setShowEditPanel] = useState(false);

    const [userData, setUserData] = useState({
        id: ID,
        nickname: Nickname,
        carnet: Carnet,
        player: Player,
    });

  return (
    <main>
        <div className='user-grid'>
        <div>
            <p> {userData.carnet} </p>
        </div>
        <div>
            <p> {userData.nickname} </p>
        </div>
        <div>
            <p> {userData.player} </p>
        </div>
        <div>
            <img
              width="25"
              height="25"
              src="/src/assets/edit.png"
              alt="Editar"
              onClick={() => setShowEditPanel(true)}
              style={{ cursor: "pointer" }}
            />
        </div>
    </div>
        <div style={{ borderBottom: '1px solid #c7c8ca', marginBottom: '20px' }}></div>
        {showEditPanel && (
            <>
            <EditUserForm userData={userData} setUserData={setUserData} flagShowEditPanel={setShowEditPanel} />
            </>
        )}
    </main>
  )
}

export default User;
