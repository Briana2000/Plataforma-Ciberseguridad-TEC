import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './challengesPage.css'
import { ChallengesContainer } from '../../cyberChallenges/components/ChallengesContainer';

export const ChallengesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {

    const challenges = [
      {
        title: "Tentacle",
        platform: "HackTheBox",
        level: "Hard",
        machine: "Linux",
        flag: false
      },
      {
        title: "Validation",
        platform: "HackTheBox",
        level: "Easy",
        machine: "Linux",
        flag: false,
      }, 
      {
        title: "Mischief",
        platform: "HackTheBox",
        level: "Insane",
        machine: "Linux",
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


  // Evento para el buscar desafíos
  const handleSearch = () => {
    console.log('Realizar busqueda');
    /*
    // Construye la URL de búsqueda con un término de búsqueda general
    const searchParams = new URLSearchParams();
    searchParams.append('searchTerm', searchTerm);
    const searchQuery = searchParams.toString();

    // Realiza una solicitud a la API de búsqueda con la URL construida
    axios.get(`/api/search?${searchQuery}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error al buscar ejercicios:', error);
      });*/
  };

  return (
    <>
      <div className="title-div">
        <h1 className="title-h1"> Cybersecurity Challenges </h1>
      </div>
      <div className="search-container">
        <input className="input-search"
          type="text"
          id="input-search"
          placeholder="Filter for title, platform, machine & level"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button-search" onClick={handleSearch}>Search</button>
      </div>

      {/* Muestra los resultados de la búsqueda o todos los desafíos */}
      <ChallengesContainer list={searchTerm ? searchResults : challenges} />
    </>
  );
}

