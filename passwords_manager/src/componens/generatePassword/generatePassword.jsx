import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);
  const [includeSybols, setIncludeSybols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [numberOfSymbols, setNumberOfSymbols] = useState(16);
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
    if (numberOfSymbols > 5 && numberOfSymbols <= 50) {
      setPassword(passwordGeneration());
      setIntervalidNumber(false);
    }
    else
      setIntervalidNumber(true);
  }

  return (
    <Form>
      <h1><b>Password Generator</b></h1>
      <br></br>
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
          <Form.Check type="checkbox" label="Use Symbols (! ? # * @ _ -)" value={includeSybols} onChange={() => setIncludeSybols(!includeSybols)} defaultChecked={true}/>
          <Form.Check className='checkbox' type="checkbox" label="Use Numbers" value={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} defaultChecked={true} />
        </div>
        <div>
          <Form.Label className='label'>Number(6-50):</Form.Label>
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