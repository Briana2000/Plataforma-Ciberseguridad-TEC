import React, { useState } from 'react';
import './styles/challengeSearch.css';
import ChallengesContainer from './ChallengesContainer';
import ChallengesCompletedFilter from './ChallengesCompletedFilter';
import AddChallengeForm from './AddChallengeForm';


const ChallengeSearch = ({ challenges, page }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const showFilterOption = page === "challenges";
  const showNewChallengeOption = page === "admin";
  const [showNewChallengeButton, setNewChallengeButton] = useState(true);
  const [isChallengeFormVisible, setIsChallengeFormVisible] = useState(false);

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

  const handleNewChallengeClick = () => {
    setIsChallengeFormVisible(true);
    setNewChallengeButton(false);
  };

  const handleSubmmitChallengeClick = () => {
    setIsChallengeFormVisible(false);
  };

  return (
    <>
      <div className="search-container">
        <input className="input-search"
          type="text"
          id="input-search"
          placeholder="Filter for name, platform, category & level"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button-search" onClick={handleSearch}>Search</button>
      </div>
      {showFilterOption && (
        <ChallengesCompletedFilter challenges={challenges} />
      )}
      {showNewChallengeOption && showNewChallengeButton && (
        <button className='button-new-challenge' onClick={handleNewChallengeClick}> New Challenge </button>
      )}
      {isChallengeFormVisible && <AddChallengeForm flagShowForm={setIsChallengeFormVisible} flagButtonNewChallenge={setNewChallengeButton} />}
      {/* Muestra los resultados de la búsqueda o todos los desafíos */}
      <ChallengesContainer activePage={page} list={searchTerm ? searchResults : challenges} />
    </>
  );
}

export default ChallengeSearch;
