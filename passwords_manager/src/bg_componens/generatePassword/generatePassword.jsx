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
      <h1><b>Генератор на пароли</b></h1>
      <br></br>
      {
        password ?
          <Form.Group className="genPass" controlId="genPass"  >
            <Form.Control placeholder="Generated Password" value={password} />
            <Button id="copy" variant="primary" onClick={() => copyText()} >
              Копирай
            </Button>
          </Form.Group>
          : null
      }
      <div className='settingsWrapper'>
        <div className='checkboxWrapper' >
          <Form.Check type="checkbox" label="Използвай символи (! ? # * @ _ -)" value={includeSybols} onChange={() => setIncludeSybols(!includeSybols)} defaultChecked={true}/>
          <Form.Check className='checkbox' type="checkbox" label="Използвай числа" value={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} defaultChecked={true}/>
        </div>
        <div>
          <Form.Label className='label'>Число (6-50):</Form.Label>
          <Form.Control className='input' type="text" placeholder="Брой числа в паролата" value={numberOfSymbols} onChange={(e) => setNumberOfSymbols(e.target.value)} />
          {invalidNumber && <p1>ИНВАЛИДНО ЧИСЛО</p1>}
        </div>
      </div>
      <Button id="genButton" variant="primary" onClick={() => generatePassword()} >
        Генерирай парола
      </Button>
    </Form>
  )
}