import React, { useState } from 'react';

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
    <div className="container">
      <h2 className="mt-4">Submit a flag</h2>
      <div className="row">
        <div className="col-md-6 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter flag"
            value={flag}
            onChange={handleFlagChange}
          />
        </div>
        <div className="col-md-6 mt-2">
          <button type="submit" className="btn btn-primary">Check</button>
        </div>
      </div>
    </div>
  );
}



