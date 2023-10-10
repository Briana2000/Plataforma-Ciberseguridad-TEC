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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewChallengeData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setFormChanged(true);
    };

    // Aquí hay que enviar el nuevo reto al API
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formChanged){
            const newChallengeJSON = JSON.stringify(newChallengeData);
            console.log(newChallengeJSON);
        }
        // Cierra el formulario
        e.target.reset();
        flagShowForm(false);
        flagButtonNewChallenge(true);
    };

    const handleCloseForm = () => {
        flagShowForm(false);
        flagButtonNewChallenge(true);
    }

    return (
    <>
    <img
        src="/src/assets/close_icon.png"
        alt="Close"
        onClick={handleCloseForm}
        style={{ cursor: "pointer", marginLeft: "800px"}}
    />
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
      
        <button className='button-save' type="submit"> Save </button>
    </Form>
    </div>
    </>
    );
};    
 
export default AddChallengeForm;
