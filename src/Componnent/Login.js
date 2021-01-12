import React, { useState } from 'react'
import { FormGroup, FormControl  } from 'react-bootstrap';
import {Button} from '@material-ui/core';
import './Login.css';

const Login=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  function validateForm(values) {
    return email.length > 0 && password.length >= 6;
    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    }
  
    return errors;
  }
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur
    
  }= useState("");

  function handleSubmit(event) {
    alert("some thine here submit"  +  email)
    event.preventDefault();
  }
  

  return (
    <div className="loginApp">
     <form onSubmit={handleSubmit}>
       <FormGroup controlId="email" bsSize="large">
         <FormControl
         autoFocus
         type="email"
         placeholder="email id"
         value={email}
         onChange={e => setEmail(e.target.value)}
         />
       </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button className="btn" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
     </form>
      
    </div>
  )
}

export default Login
