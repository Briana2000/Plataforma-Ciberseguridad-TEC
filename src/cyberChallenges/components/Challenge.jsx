import '../../cyberChallenges/styles/challenge.css'
import axios from 'axios';
import React, { useState } from 'react';

export const Challenge = ({ ID, Name, Platform, Level, Category, Description}) => {

  const [showDescription, setShowDescription] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Por ahora lo voy a dejar así sin hacer la llamada al API porque no tengo el archivo.
  // El API es /challenges/download
  const handleDownload = () => {
    console.log('Descargando archivo del reto');
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
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
        <div className="chall-name">
          <p> {Name} </p>
        </div>
        <div> 
          <img
            width="25"
            height="20"
            src={showDescription ? "./arrowUp.png" : "./arrowDown.png"}
            alt={showDescription ? "up" : "down"}
            onClick={handleToggleDescription}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div >
          <p> {Platform} </p>
        </div>
        <div >
          <p> {Category} </p>
        </div>
        <div >
          <p> {Level} </p>
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
      {showDescription && (
        <div className='div-chall-description'>
          <p> Challenge Description: </p>
          <p> {Description} </p>
        </div>
      )}
    </header>
  </>
  );
}
