import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import './styles/editChallengeForm.css';

const EditChallengeForm = ({challengeData, setChallengeData, flagShowEditPanel}) => {

  const [formChanged, setFormChanged] = useState(false);

  const [formData, setFormData] = useState({
    name: challengeData.name,
    level: challengeData.level,
    category: challengeData.category,
    platform: challengeData.platform,
    description: challengeData.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormChanged(true);
  };

  // FALTA CONECTAR LOS EVENTOS CHANGE DE CADA ATRIBUTO CON EL API ************************
  
  /*
  // Esto va dentro del return
   <Form.Group controlId="formGroupFile">
        <Form.Label>File</Form.Label>
        <Form.Control
          type="file"
          placeholder="Challenge file"
          value={file}
          onChange={handleChangeFile}
        />
      </Form.Group> */

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(formChanged);
    if (formChanged) {
      // Envía los datos actualizados al API y si la respuesta es Ok entonces cambio los datos
      // del challenge con setChallengeData que recibe el componente.
        const formDataJSON = JSON.stringify(formData);
        console.log(formDataJSON); 
    }
    // Restablece el estado formChanged a false
    setFormChanged(false);

    // Cierra el formulario
    flagShowEditPanel(false);
    e.target.reset(); 
  };

  const handleCloseForm = () => {
    flagShowEditPanel(false);
  }
    
return(
  <>
<img
  src="/src/assets/close_icon.png"
  alt="Close"
  onClick={handleCloseForm}
  style={{ cursor: "pointer", marginLeft: "700px"}}
/>
<div className="centered-form">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
  
      <Form.Group className="form-group" controlId="formGroupPlatform">
        <Form.Label>Platform</Form.Label>
        <Form.Control
          type="text"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
        />
      </Form.Group>
  
      <Form.Group className="form-group" controlId="formGroupCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Form.Group>
  
      <Form.Group className="form-group" controlId="formGroupLevel">
        <Form.Label>Level</Form.Label>
        <Form.Control
          type="text"
          name="level"
          value={formData.level}
          onChange={handleChange}
        />
      </Form.Group>
  
      <Form.Group className="form-group" controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: '100%', minHeight: '100px', height: 'auto' }}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
  
      <button className="button-save" type="submit" >
        Save
      </button> 
    </Form>
  </div>
  </>
);
}; 

export default EditChallengeForm;