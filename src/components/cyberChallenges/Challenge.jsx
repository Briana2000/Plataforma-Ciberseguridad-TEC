import './styles/challenge.css'
import axios from '../../axiosConfig';
import React, { useState } from 'react';
import EditChallengeForm from './EditChallengeForm';

export const Challenge = ({ ID, Name, Platform, Level, Category, Description, Page}) => {

  const [showDescription, setShowDescription] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showEditPanel, setShowEditPanel] = useState(false);
  const showEditAndDeleteOptions = Page === "admin";
  const showOptionCompleted = Page === "challenges";

  const [challengeData, setChallengeData] = useState({
    name: Name,
    platform: Platform,
    category: Category,
    level: Level,
    description: Description,
  });

  const handleDownload = () => {
    // Se realiza la petición al API
    axios.get(`/challenges/download/${ID}`).then((response) => {
      // Si la respuesta es exitosa
      if (response.status === 200) {
        console.log("Descargando el archivo del reto con id: "+ID+" "+response.data.message);
      } else {
        // Mostrar un error
        console.log("Error al descargar el archivo: "+response.statusText);
      }
    });
  };

  const handleToggleDescription = () => {
    
    setShowDescription(!showDescription);
    Description;
    
  };

  const handleDeleteChallenge = () => {
    console.log(`Se eliminará el reto con ID: ${ID}`);
  };

  // Esta función es por mientras después hay que quitarla
  const handleCheckboxChange = () => {
    setCompleted(!completed);
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
      <div className={Page === "challenges" ? "chall-grid-div-challenges" : "chall-grid-div-admin"}>
        <div className="chall-name">
          <p> {Name} </p>
        </div>
        <div> 
          <img
            width="25"
            height="20"
            src={showDescription ? "/src/assets/arrowUp.png" : "/src/assets/arrowDown.png"}
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
        <div style={{ display: 'flex', marginTop: '3px'}}>
          {Level === 'Very Easy' && (
            <img width="19" height="19" src="/src/assets/very_easy.png" alt="very_easy_level" />
          )}
          {Level === 'Easy' && (
            <img width="19" height="19" src="/src/assets/easy.png" alt="easy_level" />
          )}
          {Level === 'Medium' && (
            <img width="19" height="19" src="/src/assets/medium.png" alt="medium_level" />
          )}
          {Level === 'Hard' && (
            <img width="19" height="19" src="/src/assets/hard.png" alt="hard_level" />
          )}
          {Level === 'Insane' && (
            <img width="19" height="19" src="/src/assets/insane.png" alt="insane_level" />
          )}
        </div>
        <div>
          <p style={{ marginLeft: '10px', marginTop: '1px' }}>{Level}</p>
        </div>
        {showOptionCompleted && (
          <div >
            <label >
              Completed:
              <input className='checkbox-completed'
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
        )}
        <div >
          <a href="" onClick={handleDownload}> Download </a>
        </div>
        {showEditAndDeleteOptions && (
          <>
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
            <div>
            <img
              width="25"
              height="25"
              src="/src/assets/delete.png"
              alt="Eliminar"
              onClick={handleDeleteChallenge}
              style={{ cursor: "pointer" }}
            />
            </div>
            </>   
        )}
      </div>
      <div style={{ borderBottom: '1px solid #c7c8ca', marginBottom: '20px' }}></div>
      {showDescription && (
        <div className='div-chall-description'>
          <p> Challenge Description: </p>
          <p> {Description} </p>
        </div>
      )}
      {showEditPanel && (
        <>
        <EditChallengeForm challengeData={challengeData} setChallengeData={setChallengeData} flagShowEditPanel={setShowEditPanel} />
        </>
      )}
    </header>
  </>
  );
}
