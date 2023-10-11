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
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      // Para manejar la carga del archivo .zip
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0], // Guarda el archivo
      }));
    } else {
      setNewChallengeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setFormChanged(true);
  };

  // FALTA CONECTAR LOS EVENTOS CHANGE DE CADA ATRIBUTO CON EL API ************************

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formChanged) {
      const data = new FormData();
          data.append("name", formData.name);
          data.append("platform", formData.platform);
          data.append("category", formData.category);
          data.append("level", formData.level);
          data.append("description", formData.description);
          data.append("file", formData.file); // Adjunta el archivo .zip

          console.log(data.get("name"));
    }
    e.target.reset(); 
    // Restablece el estado formChanged a false
    setFormChanged(false);
    // Cierra el formulario
    flagShowEditPanel(false);
  };

  //Cierra el formulario
  const handleCloseForm = () => {
    flagShowEditPanel(false);
  }
    
return(
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
        <Form.Group className="form-group" controlId="formGroupFile">
            <Form.Label>Attach .zip File</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleChange}
            />
          </Form.Group>
  
      <button className='button-cancel' onClick={handleCloseForm}> Cancel </button> <button className="button-save" type="submit" >
        Save
      </button> 
    </Form>
  </div>
);
}; 

export default EditChallengeForm;