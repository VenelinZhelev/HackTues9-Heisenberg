import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className='before'>
      <h1><b>How to make a strong password</b></h1>
      <br></br>
      <img src="https://images.unsplash.com/photo-1541929866681-94eb7c9a4c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1303&q=80" width={600} height={400} />
      <br />
      <small><a>Credit: Yura Fresh</a></small>
      <hr />
      <div className='blog'>
      <p>
         Creating a strong password is one of the most important steps you can take to protect your online accounts and personal information from compromise. Hackers use a variety of methods to crack weak passwords, including dictionary attacks, brute-force attacks, and social engineering. To create a strong password that's hard to crack, consider the following tips:
         </p>
         <h3><ul>Length</ul></h3>
         <p> Use a long password that is at least 12 characters long. The longer the password, the harder it is to crack. A good password length is between 15 and 20 characters.</p>
         <h3><ul>Complexity</ul></h3>
         <p>Use a combination of upper and lower case letters, numbers and symbols. Avoid using easily recognizable information such as your name, birthday or common words.</p>
         <h3><ul>Uniqueness</ul></h3>
         <p>Use a unique password for every account you have. Avoid using the same password for multiple accounts, as this makes it easier for hackers to gain access to all of your accounts if they crack one password.</p>
         <h3><ul>Avoid common passwords</ul></h3>
         <p>Do not use common passwords or sequences, such as "123456" or "qwerty".</p>
         <h3><ul>Avoid personal information</ul></h3>
         <p>Do not use personal information in your password, such as your name, username, or birthday.</p>
         <h3><ul>Consider using a passphrase</ul></h3>
         <p>Instead of using a single word, consider using a passphrase. A passphrase is a series of words that are easy to remember but difficult for other people to know.</p>
         <h3><ul>Use a password manager</ul></h3>
         <p>Also consider using a password manager to create and store complex passwords for all your accounts. Password managers generate and store passwords securely, so you don't have to remember them all.</p>
      </div>
      <hr />
      <h6>Author: Stefan Stoyanov</h6>
    </div>
  )
}
