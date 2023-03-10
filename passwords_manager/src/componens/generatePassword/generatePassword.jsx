import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);

  function passwordGeneration(length, sus) {
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

  function copyText() { 
   let copyText = document.getElementById("genPass");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <Form>
      <br></br>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
        Generate Password
      </Button>
      <Form.Check type="checkbox" label="Use Symbols (! ? # * @_)" />
      <Form.Check type="checkbox" label="Use Numbers" />
      {
        password ?
          <Form.Group className="genPass" controlId="genPass"  >
            <Form.Control placeholder="Generated Password" value={password} />
            <Button id="copy" variant="primary" onClick={() => copyText()} >
              Copy
            </Button>
          </Form.Group>
          : null
    }
    </Form>
  )
}