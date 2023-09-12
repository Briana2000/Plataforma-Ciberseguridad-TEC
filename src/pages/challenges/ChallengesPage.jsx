import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './challengesPage.css'
import { ChallengeSearch } from '../../cyberChallenges/components/ChallengeSearch';


export const ChallengesPage = () => {
  
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {

    const challenges = [
      {
        title: "Title",
        platform: "HackTheBox",
        level: "Hard",
        category: "category 1",
        details: "hola",
        flag: false,
      },
      {
        title: "Title",
        platform: "HackTheBox",
        level: "Easy",
        category: "category 2",
        details: "hola",
        flag: false,
      }, 
      {
        title: "Title",
        platform: "HackTheBox",
        level: "Insane",
        category: "category 3",
        details: "hola",
        flag: false,
      }]
    
    setChallenges(challenges);
    /* Aquí voy a hacer la solicitud al API para mostrar los desafíos existentes
    axios.get('/api/challenges')
      .then((response) => {
        setChallenges(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los desafíos:', error);
      });*/
  }, []);

  return (
    <>
      <div className="title-div">
        <h1 className="title-h1"> Cybersecurity Challenges </h1>
      </div>
      < ChallengeSearch challenges={challenges} />
     
    </>
  );
}

