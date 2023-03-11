import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css';

export default function GeneratePassword() {
  const [password, setPassword] = useState(0);
  const [includeSybols, setIncludeSybols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [numberOfSymbols, setNumberOfSymbols] = useState(10);
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

  function copyText() {
    let copyText = document.getElementById("genPass");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  } 

  return (
    <Form>
      <h1><b>Password Generator</b></h1>
      <br></br>
      <h4>Password Generator</h4>
      <Form.Check type="checkbox" label="Use Symbols (! ? # * @ _)" />
      <Form.Check type="checkbox" label="Use Numbers" />
      <p>Write how much symbols you want in the password.</p>
      <input type="text" id="myInput"/>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
      </Button>
      {
        password ?
          <Form.Group className="genPass" controlId="genPass"  >
            <br></br>
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