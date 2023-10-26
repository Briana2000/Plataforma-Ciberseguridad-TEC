import React, { useState } from 'react';
import UsersContainer from './UsersContainer';
import './usersSearchBar.css';

const UsersSearchBar = ({users}) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        console.log('Realizar busqueda');
    }

  return (
    <>
    <div className="search-container">
        <input className="input-search"
          type="text"
          id="input-search"
          placeholder="Filter for name, student carnet or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button-search" onClick={handleSearch}>Search</button>
    </div>
    <div>

    </div>  
    {/* Muestra los resultados de la búsqueda de los usuarios o todos */}
    <UsersContainer list={searchTerm ? searchResults : users} />
    </>
  )
}

export default UsersSearchBar;
