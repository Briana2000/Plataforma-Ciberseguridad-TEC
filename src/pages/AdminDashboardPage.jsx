import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import ChallengeSearch from "../components/cyberChallenges/ChallengeSearch";
import Title from "../components/cyberChallenges/Title";


export const AdminDashboardPage = () => {

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
     // Solicitud al API para mostrar los desafíos existentes
     axios.get('/challenges/')
     .then((response) => {
       setChallenges(response.data);
     })
     .catch((error) => {
       console.error('Error al cargar los desafíos:', error);
     });

 }, []);

  return (
    <>
      <Title />
      < ChallengeSearch challenges={challenges} page={'admin'} />
    </>
  )
}
