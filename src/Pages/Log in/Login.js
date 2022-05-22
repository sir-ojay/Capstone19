import React from 'react'
import './Login.css'
import { useState , useEffect } from 'react'


const Login = () => {

  const [formValid, setFormValid] = useState(false)

  const[form, setForm] = useState({
    email: "" ,
    password: ""
  });

  useEffect(()=>{
    if (
        form.email !== "" &&
        form.password !== ""
     
    ){
        setFormValid(true)
    } else {
        setFormValid(false)
    }
}, [form])

  const [data, setData] = useState({});

  const handleChange = (e)=>{
    setForm({
      ...form ,
      [e.target.name]: e.target.value
    })
  }

  const error = document.getElementById("errorMessage");
 
  const submitForm = (e)=>{
  e.preventDefault();
   if(formValid=== true){
    setData({
      ...form
    })
    sessionStorage.setItem('userDetails' , JSON.stringify({...form}));
    console.log(data)
    error.textContent= "";
    window.location = "/dashboard" ;
    
    
   }
   else{
     error.style.color = "red";
     error.textContent= "Enter your details";
   }



  }
 
   
  return (
        <div className='bdy'>
         <div className="formBox">
             
        <h1>Login Form</h1>
        <p>Welcome Back </p>

        <form className="loginForm"  onSubmit={submitForm}>
            <div id="errorMessage"></div>
           <div><input type="email" name="email" id="emailBox" className="formField" placeholder="Email Address" onChange={handleChange}/></div> 
           <hr/>
           
           <div> <input type="password" name="password" id="passwordBox" className="formField" placeholder="Password" onChange={handleChange}/></div>
           <hr/>
          <div className="submit"><input type="submit" name="submit" id="submitButton" /></div>  
        </form>
    </div>
    </div>
    
  )
}

export default Login