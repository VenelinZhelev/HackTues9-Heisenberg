import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);

  function passwordGeneration(length) {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?#*@_';
    let pass = '';
    const charDulj = char.length;
    for (let i = 0; i < length; i++) {
      pass += char.charAt(Math.floor(Math.random() * charDulj));
    }
    return pass;
  }

  function generatePassword() {
    setPassword(passwordGeneration(5) + '-' + passwordGeneration(5) + '-' + passwordGeneration(5) + '-' + passwordGeneration(5));
  }

  return (
    <Form>
      <br></br>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
        Generate Password
      </Button>
      {
        password ?
          <Form.Group className="genPass" controlId="genPass"  >
            <Form.Control placeholder="Generated Password" value={password} />
          </Form.Group>
          : null
    }
    </Form>
  )
}