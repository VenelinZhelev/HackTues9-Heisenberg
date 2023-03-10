import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css';

export default function RatePassword() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({});

  function calculateStrength() {
    console.log(password);
    let strength = 0;
    if (password.match(/[a-z]/))
      strength++;
    if (password.match(/[A-Z]/))
      strength++;
    if (password.match(/[0-9]/))
      strength++;
    if (password.match(/[!-/]/) || password.match(/[[-`]/i) || password.match(/[{-~]/i))
      strength += 2;
    if (password.length < 8)
      strength--;
    else if (password.length > 10)
      strength++;

    switch (strength) {
      case 0: case 1: case 2:
        setStrength({
          text: "Weak",
          class: "password-strength-weak",
        })
        break;
      case 3:
        setStrength({
          text: "Mid",
          class: "password-strength-mid",
        })
        break;
      case 4: case 5:
        setStrength({
          text: "Strong",
          class: "password-strength-strong",
        })
        break;
      case 6:
        setStrength({
          text: "Very Strong",
          class: "password-strength-very-strong",
        })
        break;
      default:
        break;
    }
  }

  const handleChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => calculateStrength();

  return (
    <>
      <div className='title'>
        <h1>Password</h1>
        <h1>Grader</h1>
      </div>

      <Form>
        <Form.Label className='label'>Enter password:</Form.Label>
        <div className="inputWrapper">
          <Form.Control className={strength?.class} id="input" type="text" placeholder="Type your password"
            onChange={(e) => handleChange(e)} value={password} />
          <Button id="button" variant="primary" type="button" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </div>


        {Object.keys(strength).length !== 0 ?
          <p>Your password is: <b>{strength.text}</b></p>
          : null
        }
      </Form>
    </>
  );

}
