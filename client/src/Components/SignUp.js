import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/form.css";

const SignUp = () => {
  const [user, setUser] = useState({name:"", email:"", password:""});
  const [error, setError]=useState( {
    name: '',
    email: '',
    password: '',
  })
 
  const [alertdisplay, setAlert]=useState(false);
  const [status, setStatus]=useState(false);
  const [message, setMessage]=useState("")
  const validNameRegex=/^[a-zA-Z ]+$/;
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
  const changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    let error;
    switch (nam) {
            
      case 'name': 
        
        if(val.length<3){
            error="Cannot be less than 3 characters long";
        }else if(!val.match(validNameRegex)){
            error="Only Characters are allowed";
        }
        else{
            error="";
        }
            
        break;
       
        case 'email': 
        if(validEmailRegex.test(val)){
            error="";
        }else{
            error="Not a valid Email";
        }
        break;
        case 'password': 
        if(val.length<5){
            error="Cannot be less than 5 characters long";
        }else{
            error="";
        }
        break;
       default:
         error="" 
    }

 
   
    setUser({...user,[nam]:val});
    setError({...error,[nam]:error})
      
   if(error){
       setStatus(false)
    }else{
        setStatus(true)
    }
    
  };
  const clearFields = () => {
    setUser(null);
  };
  

  const SubmitUserData = (e) => {
    e.preventDefault();
    console.log(user);
    if(user.name===""||user.password===""||user.email===""){
            setMessage("**All Fields are Required")
    }
    else{
    axios
      .post("http://localhost:8000/signup", user)
      .then((response) => {
        console.log(response);
        if(response.data==="User already exists"){
          setMessage("You are already have an account..Please Sign In")
        }else
        setAlert(true);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
  return (
    <>
    <div className="col-md-4 offset-md-4 myForm">
      <h3 id="title">Sign Up</h3>
      <form onSubmit={SubmitUserData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={changeHandler}
          />
           <div className="invalid-feedback d-block">{error.name}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={changeHandler}
          />
           <div className="invalid-feedback d-block">{error.email}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            onChange={changeHandler}
          />
           <div className="invalid-feedback d-block">{error.password}</div>
        </div>
        <input
          type="submit"
          name="Create Account"
          className="btn btn-primary"
          disabled={!status}
        />
      </form>
    </div>
    {alertdisplay?<div class="alert alert-primary" style={{paddingTop:"15px"}} role="alert" >"Thankyou..You have created the account"</div>:""}
    <b style={{color:"red", fontStyle:"italic"}}>{message}</b>
    </>
  );
};

export default SignUp;
