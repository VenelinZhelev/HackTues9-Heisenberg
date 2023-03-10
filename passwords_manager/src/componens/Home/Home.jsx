import React from 'react';

export default function About() {
  return (
        <div>
        <h1>Welcome to</h1>
        <h1><b>Password Manager</b></h1>
        <br></br>
        <br/>
        <h5>This is a website about checking how secure your passwords are.</h5>
        <h5>If a password are weak, you will be able to generate brand new secure one.</h5>
        <br></br>
        <br></br>
        <h2>How to secure your online accounts?</h2>
        <h5>The best way you can secure your account is by creating a strong password. <a href="/ratePassword">You can check how strong your password is by clicking here!</a> Other ways for securing your account include enabling Two-Factor Authentication, if the site supports it. This will send you a code to your e-mail or mobile phone and you must enter it in order to log into the account. You should also avoid sharing any information about the account with other people (such as e-mail, username, etc.).</h5>
        <br></br>
        <h2>How to make a strong password?</h2>
        <h5>In order to make a password, you must avoid commonly used ones (such as 12345678, qwerty, password, etc), and passwords that include easy to guess stuff (such as you birthday date, your mom's name, etc.). Strong passwords are usually very long and include other symbols, rather than just letters and numbers. <a href="/generatePassword">You can get an automatically generated, customizable, strong and secure password from here!</a></h5>
        </div>     
  )
}
    