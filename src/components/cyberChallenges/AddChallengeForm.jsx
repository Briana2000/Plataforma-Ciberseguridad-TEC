import './styles/addChallengeForm.css'
import { Form } from "react-bootstrap";
import React, { useState } from "react";

const AddChallengeForm = ({flagShowForm, flagButtonNewChallenge}) => {

    const [formChanged, setFormChanged] = useState(false);

    const [newChallengeData, setNewChallengeData] = useState({
        name: "",
        platform: "",
        category: "",
        level: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
          // Para manejar la carga del archivo .zip
          setNewChallengeData((prevData) => ({
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

    // Aquí hay que enviar el nuevo reto al API
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formChanged) {
          const formData = new FormData();
          formData.append("name", newChallengeData.name);
          formData.append("platform", newChallengeData.platform);
          formData.append("category", newChallengeData.category);
          formData.append("level", newChallengeData.level);
          formData.append("description", newChallengeData.description);
          formData.append("file", newChallengeData.file); // Adjunta el archivo .zip
    
          // Aquí puedes realizar la solicitud al API con formData
          // Ejemplo: fetch('tu_url_de_API', { method: 'POST', body: formData })
          console.log(formData.get("name"));
        }
        e.target.reset();
        flagShowForm(false);
        flagButtonNewChallenge(true);
      };
    

    const handleCloseForm = () => {
        flagShowForm(false);
        flagButtonNewChallenge(true);
    }

    return (
    <div className="centered-form">
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={newChallengeData.name}
                    onChange={handleChange}
                />
        </Form.Group>

        <Form.Group className="form-group" controlId="formGroupPlatform">
            <Form.Label>Platform</Form.Label>
                <Form.Control
                    type="text"
                    name="platform"
                    value={newChallengeData.platform}
                    onChange={handleChange}
                />
        </Form.Group>

        <Form.Group className="form-group" controlId="formGroupCategory">
                <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        value={newChallengeData.category}
                        onChange={handleChange}
                    />
        </Form.Group>
      
        <Form.Group className="form-group" controlId="formGroupLevel">
            <Form.Label>Level</Form.Label>
                <Form.Control
                    type="text"
                    name="level"
                    value={newChallengeData.level}
                    onChange={handleChange}
                />
        </Form.Group>

        <Form.Group className="form-group" controlId="formGroupDescription">
            <Form.Label>Challenge Description</Form.Label>
                <Form.Control
                    as="textarea"
                    style={{ width: '100%', minHeight: '100px', height: 'auto' }}
                    name="description"
                    value={newChallengeData.description}
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
      
          <button className='button-cancel' onClick={handleCloseForm}> Cancel </button> <button className='button-save' type="submit"> Save </button>
    </Form>
    </div>
    );
};    
 
export default AddChallengeForm;
