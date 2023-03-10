import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);
  const [includeSybols, setIncludeSybols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [numberOfSymbols, setNumberOfSymbols] = useState(8);

  function passwordGeneration() {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', pass = '';
    if (includeSybols) {
      symbols += '!?#*@_-';
    }
    if (includeNumbers) {
      symbols += '0123456789';
    }

    for (let i = 0; i < numberOfSymbols; i++) {
      pass += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return pass;
  }

  function generatePassword() {
    setPassword(passwordGeneration());
  }

  function copyText() {
    navigator.clipboard.writeText(password);
  }

  return (
    <Form>
      <br></br>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
        Generate Password
      </Button>
      <Form.Check type="checkbox" label="Use Symbols (! ? # * @ _ -)" value={includeSybols} onChange={() => setIncludeSybols(!includeSybols)} />
      <Form.Check type="checkbox" label="Use Numbers" value={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
      <Form.Control type="number" placeholder="Number of digits in the password" value={numberOfSymbols} onChange={(e) => setNumberOfSymbols(e.target.value)} />
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