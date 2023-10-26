import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import './editUserForm.css';

const EditUserForm = ({userData, setUserData, flagShowEditPanel}) => {

    const [formChanged, setFormChanged] = useState(false);

    const [formData, setFormData] = useState({
        nickname: userData.nickname,
        carnet: userData.carnet,
        password: "",
        player: userData.player,
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setFormChanged(true);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formChanged) {
      const data = new FormData();
          data.append("nickname", formData.nickname);
          data.append("carnet", formData.carnet);
          data.append("password", formData.password);
          data.append("player", formData.player);

          console.log(data.get("nickname"));
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
  };

    return (
        <div className="centered-form-user">
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupNickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                />
            </Form.Group>
        
            <Form.Group className="form-group-user" controlId="formGroupCarnet">
                <Form.Label>Carnet</Form.Label>
                <Form.Control
                    type="text"
                    name="carnet"
                    value={formData.carnet}
                    onChange={handleChange}
                />
            </Form.Group>
        
            <Form.Group className="form-group-user" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>
        
            <Form.Group className="form-group-user" controlId="formGroupPlayer">
                <Form.Label>User Role</Form.Label>
                <Form.Select
                    name="player"
                    value={formData.player}
                    onChange={handleChange}
                    > 
                    <option value="Student"> Student </option>
                    <option value="Admin"> Admin </option>
                </Form.Select>
            </Form.Group>
        
            <button className='button-cancel-user' onClick={handleCloseForm}> Cancel </button> <button className="button-save-user" type="submit" >
                Save
            </button> 

            </Form>
        </div>
    )
}

export default EditUserForm;
