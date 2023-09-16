import './styles/challenge.css'
import axios from '../../axiosConfig';
import React, { useState } from 'react';

export const Challenge = ({ ID, Name, Platform, Level, Category}) => {
  
  const [showDescription, setShowDescription] = useState(false);
  const [Description, setDescription] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDownload = () => {
    // Obtiene el id del reto
    const id = ID;
    // Se realiza la petición al API
    axios.get(`/challenges/download/${id}`).then((response) => {
      // Si la respuesta es exitosa
      if (response.status === 200) {
        console.log("Descargando el archivo del reto con id: "+id+" "+response.data.message);
      } else {
        // Mostrar un error
        console.log("Error al descargar el archivo: "+response.statusText);
      }
    });
  };

  const handleToggleDescription = () => {
    
    // Obtiene el id del reto
    const id = ID;

    console.log("Id del reto a ver info: "+id);

    setShowDescription(!showDescription);
  
    // Se realiza la petición al API
    axios.get(`/challenges/info/${id}`).then((response) => {
      // Si la respuesta es exitosa
      if (response.status === 200) {
        // Obtener la descripción del reto
        const description = response.data.Description;
  
        // Actualizar el estado del componente
        setDescription(description);
      } else {
        // Mostrar un error
        console.log("Error al mostrar la descripción del reto: "+response.statusText);
      }
    });
  };

  // Esta función es por mientras después hay que quitarla
  const handleCheckboxChange = () => {
    setCompleted(!completed);
  }

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
              onChange={handleCheckboxChange}
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
