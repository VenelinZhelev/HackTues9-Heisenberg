import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className='before'>
      <h1><b>How to protect your online accounts!</b></h1>
      <br></br>
      <img src="https://images.unsplash.com/photo-1642480504730-3ba4bbfaa0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width={600} height={400} />
      <br />
      <small><a>Credit: Mourizal Zativa</a></small>
      <hr />
      <div className='blog'>
        <p>
          In today's digital world, we rely on passwords for almost everything, from accessing our bank accounts to logging into social networks. With the number of data breaches on the rise, it's more important than ever to protect our passwords. In this blog, we'll discuss some tips on how to make your passwords more secure.
        </p>
        <h3><ul>Use a unique and strong password,</ul></h3>
        <p>The first step to protecting your account is to use a strong and unique password. A strong password must be at least 12 characters long (16 is recommended) and include a combination of upper and lower case letters, numbers and symbols. It should be unique and you should avoid using the same password for multiple accounts.</p>
        <h3><ul>Don't share your passwords</ul></h3>
        <p>Never share your passwords with anyone, including family members or friends. If you need to share account access, use a password manager to share the password securely.</p>
        <h3><ul>Use a password manager</ul></h3>
        <p>Using a password manager is an effective way to protect your passwords. Password managers generate strong passwords, store them securely, and automatically fill them in for you.</p>
        <h3><ul>Activate 2FA (Two-Factor Authentication)</ul></h3>
        <p>Two-factor authentication is an extra layer of security that requires you to provide a second form of identification, such as a fingerprint or a code sent to your phone, in addition to your password. This makes it harder for hackers to access your accounts even if they have your password.</p>
        <h3><ul>Avoid using public Wi-Fi networks</ul></h3>
        <p>Using public Wi-Fi networks can be dangerous for the security of your passwords. Hackers can use these networks to transfer data and steal your passwords. If you must use a public Wi-Fi network, use a virtual private network (VPN) that will encrypt your data and protect it from hacker attacks.</p>
        <h3><ul>DON'T save your passwords in the browser</ul></h3>
        <p>Browsers have a password saving feature that may be convenient, but it's not particularly secure. If you save your passwords in the browser, someone else can access them if they gain physical access to your computer. Use a password manager to store your passwords securely.</p>
        <h3><ul>Be careful when replying to electronic messages</ul></h3>
        <p>Hackers can send fake emails pretending to be a banking institution or other trusted source to trick you into giving them your personal information and passwords. Always be careful when responding to electronic messages, especially if they ask you to enter personal information or passwords.</p>
        <h3><ul>Change your passwords regularly</ul></h3>
        <p>Changing your password is a pretty important part of our cyber security. Many experts advise changing the password every 3-6 months.</p>
      </div>
      <hr />
      <h6>Author: Stefan Stoyanov</h6>
    </div>
  )
}
