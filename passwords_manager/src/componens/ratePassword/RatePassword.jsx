import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function RatePassword() {

    function handleSubmit(event) {
      window.alert(password);
      var strongMeter = 0;
      if(password.match(/[a-z]/)){
        strongMeter++;
      }
      if(password.match(/[A-Z]/)){
        strongMeter++;
      }
      if(password.match(/[0-9]/)){
        strongMeter++;
      }
      if(password.match(/[!-/]/) || password.match(/[[-`]/i) || password.match(/[{-~]/i)){
        strongMeter++;
      }
      if(password.length < 8){
        strongMeter--;
      }else if(password.length > 16){
        strongMeter++;
      }
      switch(strongMeter){
        
        case 0: case 1: case 2:
          console.log("WEAKE")
          break;
        case 3:
          console.log("Mid")
          break;
        case 4:
          console.log("Stronge")
          break;
        case 5:
          console.log("SUPER STRONG")
          break;
        default:
          console.log("KABOOM")
          break;
      }
      event.preventDefault();
    }

  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Your Password:</Form.Label>
      <Form.Control type="text" placeholder="type your password" onChange={(e)=>handleChange(e)} value={password} />
    </Form.Group>
    <Button variant="primary" type="button" onClick={(e)=>handleSubmit(e)}>
    Submit
    </Button>
  </Form>
  )
}
