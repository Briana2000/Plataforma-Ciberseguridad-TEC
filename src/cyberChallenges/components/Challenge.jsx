import '../../cyberChallenges/styles/challenge.css'
import axios from 'axios';
import React, { useState } from 'react';

export const Challenge = ({ title, platform, level, category, details, flag}) => {

  const [showDetails, setShowDetails] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Por ahora lo voy a dejar así sin hacer la llamada al API porque no tengo el archivo.
  // El API es /challenges/download
  const handleDownload = () => {
    console.log('Descargando archivo del reto');
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  /*
  const handleCheckboxChange = async () => {
  try {
    // Realiza una solicitud PUT al backend para actualizar el estado del desafío
    await axios.put('/challenges/update', {
      flag: true, // Establece la bandera como true para indicar que el desafío está completado
      // Otras propiedades que necesites enviar al backend
    });

    // Actualiza el estado local 'completed' después de que la solicitud se haya completado con éxito
    setCompleted(true);
  } catch (error) {
    console.error('Error al actualizar el estado del desafío:', error);
    // Maneja errores de manera apropiada aquí (mostrar un mensaje de error, por ejemplo).
    }
  };*/

  return (
    <>
    <header>
      <div className="chall-grid-div">
        <div className="chall-title">
          <p> {title} </p>
        </div>
        <div> 
          <img
            width="25"
            height="20"
            src={showDetails ? "./arrowUp.png" : "./arrowDown.png"}
            alt={showDetails ? "up" : "down"}
            onClick={handleToggleDetails}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div >
          <p> {platform} </p>
        </div>
        <div >
          <p> {category} </p>
        </div>
        <div >
          <p> {level} </p>
        </div>
        <div >
          <label >
            Completed:
            <input className='checkbox-completed'
              type="checkbox"
              checked={completed}
              /* onChange={handleCheckboxChange} */
            />
          </label>
        </div>
        <a href="" onClick={handleDownload}> Download </a>
      </div>
      <div style={{ borderBottom: '1px solid #c7c8ca', marginBottom: '20px' }}></div>
      {showDetails && (
        <div className="chall-details">
          <p> Challenge Details: </p>
          <p> {details} </p>
        </div>
      )}
    </header>
  </>
  );
}
