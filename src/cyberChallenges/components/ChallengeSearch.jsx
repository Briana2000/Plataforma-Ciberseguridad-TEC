import React, { useState } from 'react';
import '../../cyberChallenges/styles/challengeSearch.css'
import { ChallengesContainer } from './ChallengesContainer';
import { ChallengesCompletedFilter } from '../../cyberChallenges/components/ChallengesCompletedFilter';


export const ChallengeSearch = ({ challenges }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

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
      <div className="search-container">
        <input className="input-search"
          type="text"
          id="input-search"
          placeholder="Filter for title, platform, category & level"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button-search" onClick={handleSearch}>Search</button>
      </div>
      
      <ChallengesCompletedFilter challenges={challenges} />
      
      {/* Muestra los resultados de la búsqueda o todos los desafíos */}
      <ChallengesContainer list={searchTerm ? searchResults : challenges} />
    </>
  );
}
