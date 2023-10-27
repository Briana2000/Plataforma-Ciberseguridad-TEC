import "../components/cyberChallenges/styles/login.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const [meat, setMeat] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate(); //Navegar entre paginas


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function createAccount(){
      navigate('/register');
      // Verificar si la contraseña o usuario son incorrectos
      // Si la contraseña o usuario es incorrecto, se establece isIncorrectPassword en true.
      if (password !== 'contraseña_correcta') {
        setLoginError(true);
      } else {
        // Si la contraseña y el usuario es correcta
        navigate('/register');
      }
  } 

  return (
    <div>
      <h2 className="square-container ">
          <form className="fields-container"> 
            <img src="src/assets/logoBlanco.png" style={{width: "400px", height: "200px"}}/>           
            <div className="input-container">
              <input className="fields" type="text" meat="meat" placeholder="Meat" value={meat} onChange={(e) => setMeat(e.target.value)}
              />
            </div>
            <div className="input-container">
              <div className="password-container">
                <input className="fields" type={showPassword ? "text" : "password"} password="password" 
                  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span className="show-password" onClick={toggleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
              </div>
            </div>
            
            <div className="fields-container">
              <button className="button-login">
                Login
              </button>
            </div> 
            {loginError && (
              <div className="error-message-login"> 
               The password or meat entered is incorrect.
              </div>
            )}
            <div className="fields-container">
              <button className="button-register" onClick={createAccount}>
                Create Account
              </button>
            </div>
          </form>
      </h2>      
    </div>                      
    )
}
export default LoginPage