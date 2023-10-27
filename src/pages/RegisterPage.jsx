import "../components/cyberChallenges/styles/register.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const [meat, setMeat] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [nickname, setNickname] = useState("")

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate(); //Navegar entre paginas


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    function goLogin(){
        if (meat != ""){//Verifica que el usuario no este registrado anteriormente
            if (password !== confirmPassword) {// Si las contraseñas no coinciden, muestra un mensaje de error
                setPasswordError(true);
            }else{
                //Si cumple se crea en la BD 
                navigate('/login');
            }
        }else {
            //Muestra mensaje de error
            setRegisterError(true);
        }
    } 
  
      return (
        <div>
          <h2 className="square-container-register">
              <form className="fields-container-register"> 
                <img className="imagen-logo-register" src="src/assets/logoBlanco.png"/>           
                
                <div className="input-container-register">
                  <input className="fields-register" type="text" meat="meat" placeholder="Meat" value={meat} onChange={(e) => setMeat(e.target.value)}
                  />
                </div>
                <div className="input-container-register">
                  <input className="fields-register" type="text" nickname="nickname" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
                <div className="input-container-register">
                  <div className="password-container-register">
                    <input className="fields-register" type={showPassword ? "text" : "password"} password="password" 
                      placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span className="show-password-register" onClick={toggleShowPassword}>
                      <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </span>
                  </div>
                </div>

                <div className="input-container-register">
                  <div className="password-container-register">
                    <input className="fields-register" type={showConfirmPassword ? "text" : "password"} confirmPassword="confirmPassword" 
                      placeholder="Confirm the password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <span className="show-password-register" onClick={toggleShowConfirmPassword}>
                      <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash}/>
                    </span>
                  </div>
                </div>
                
                {registerError && (
                <div className="error-message-register"> 
                    This user has already been registered.
                </div>
                )}
                {passwordError && (
                    <div className="error-message-register"> 
                        Passwords do not match. He tries again.
                    </div>
                )}


                <div className="fields-container-register">
                  <button className="button-create" type="button" onClick={goLogin}>
                    Create
                  </button>
                </div> 
              </form>
          </h2>      
        </div>                      
        )
    }
  
export default RegisterPage