import '../../cyberChallenges/styles/challenge.css'

// Falta el botón de descargar el reto
export const Challenge = ({ title, platform, level, machine, flag}) => {
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
        <a href="/descargar"> Descargar </a>
      </div>
  </>
  );
}
