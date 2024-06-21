import React from 'react';
import "./Register.css";

function Register() {
  return (
    <form className="registerForm">
      <h2>Register</h2>
      <label>
        Username
        <input type="text" placeholder="Enter your username" />
      </label>
      <label>
        Email
        <input type="email" placeholder="Enter your email" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Enter your password" />
      </label>
      <label>
        Confirm Password
        <input type="password" placeholder="Confirm your password" />
      </label>
      <label>
        Phone Number
        <input type="tel" placeholder="Enter your phone number" />
      </label>
      <label>
        Date of Birth
        <input type="date" />
      </label>
      <label>
        Address
        <input type="text" placeholder="Enter your address" />
      </label>
      <label>
        City
        <input type="text" placeholder="Enter your city" />
      </label>
      <label>
        State
        <input type="text" placeholder="Enter your state" />
      </label>
      <label>
        Country
        <input type="text" placeholder="Enter your country" />
      </label>
      <label>
        Postal Code
        <input type="text" placeholder="Enter your postal code" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
