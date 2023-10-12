import React, { useState } from 'react';
import NavigationBar from '../components/navigationBar/NavigationBar';

export const SubmitFlagPage = () => {

  const [flag, setFlag] = useState('');

  const handleFlagChange = (event) => {
    setFlag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la flag al servidor o realizar validaciones adicionales.
    console.log('Flag submitted:', flag);
  };

  return (
    <>
    <NavigationBar activeItem = {'submit_flag'}/>
    <div style={{marginLeft:'80px'}}>
      <h2 className="mt-4"> Submit a flag </h2>
      <div className="row">
        <div className="col-md-6 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="all flags take the form ^flag^...hex...$flag$"
            value={flag}
            onChange={handleFlagChange}
          />
        </div>
        <div className="col-md-6 mt-2">
          <button type="submit" className="btn btn-primary">Check</button>
        </div>
      </div>
    </div>
    </>
  );
}



