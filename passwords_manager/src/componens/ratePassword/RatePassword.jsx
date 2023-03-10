import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './style.css'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
            strength+=2;
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
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Password:</Form.Label>
                <Form.Control className={strength?.class} type="text" placeholder="type your password" 
                onChange={(e) => handleChange(e)} value={password} />
            </Form.Group>
            {Object.keys(strength).length !== 0 ?
                <p1>{strength.text}</p1>
                : null
            }
            <Button variant="primary" type="button" onClick={(e) => handleSubmit(e)}>
                Submit
            </Button>
        </Form>
    );

}
