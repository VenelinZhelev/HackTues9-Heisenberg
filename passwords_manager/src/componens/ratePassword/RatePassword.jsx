import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css';

export default function RatePassword() {
 return (
    <Form >
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <h5>Password</h5>
      <Form.Control size="lg" type="password" placeholder="Write your password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Show Password" />
    </Form.Group>
    <Button variant="primary" type="submit" >
      Check
    </Button>
  </Form>
  )
}
