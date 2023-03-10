import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);
  const [includeSybols, setIncludeSybols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [numberOfSymbols, setNumberOfSymbols] = useState(8);
  const [invalidNumber, setIntervalidNumber] = useState(false);

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
    validateNumber();
  }

  function copyText() {
    navigator.clipboard.writeText(password);
  }


  function validateNumber() {
    if (numberOfSymbols > 0 && numberOfSymbols <= 50) {
      setPassword(passwordGeneration());
      setIntervalidNumber(false);
    }
    else
      setIntervalidNumber(true);
  }

  return (
    <Form>
      <br></br>
      <h1>Password</h1>
      <h1>Generator</h1>
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
      <div className='settingsWrapper'>
        <div className='checkboxWrapper' >
          <Form.Check type="checkbox" label="Use Symbols (! ? # * @ _ -)" value={includeSybols} onChange={() => setIncludeSybols(!includeSybols)} />
          <Form.Check className='checkbox' type="checkbox" label="Use Numbers" value={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
        </div>
        <div>
          <Form.Label className='label'>Number(1-50):</Form.Label>
          <Form.Control className='input' type="text" placeholder="Number of digits in the password" value={numberOfSymbols} onChange={(e) => setNumberOfSymbols(e.target.value)} />
          {invalidNumber && <p1>INVALID NUMBER</p1>}
        </div>
      </div>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
        Generate Password
      </Button>
    </Form>
  )
}