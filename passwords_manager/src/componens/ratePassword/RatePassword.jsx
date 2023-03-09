import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function RatePassword() {

    function handleSubmit(event) {
window.alert(password);
    }

      const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form onSubmit={(e)=>handleSubmit(e)}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Your Password:</Form.Label>
      <Form.Control type="text" placeholder="type your password" onChange={(e)=>handleChange(e)} value={password} />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
  </Form>
  )
}
