import '../../cyberChallenges/styles/challenge.css'
import axios from 'axios';

export const Challenge = ({ title, platform, level, machine, flag}) => {

  // Por ahora lo voy a dejar así sin hacer la llamada al API porque no tengo el archivo.
  // El API es /challenges/download
  const handleDownload = () => {
    console.log('Descargando archivo del reto');
  };

  return (
    <>
      <div className="chall-grid-div">
        <div className="chall-title">
          <p> {title} </p>
        </div>
        <div className="chall-title">
          <p> {platform} </p>
        </div>
        <div className="chall-title">
          <p> {level} </p>
        </div>
        <div className="chall-title">
          <p> {machine} </p>
        </div>
        <div className="chall-title">
          <label >
            Completed:
            <input 
              type="checkbox"
            /* Falta el evento de la flag */
            />
          </label>
        </div>
        <a href="" onClick={handleDownload}> Download </a>
      </div>
  </>
  );
}
