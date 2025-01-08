import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function LogIn({saveUserData}) {

   let navigate = useNavigate();
    const Joi = require('joi');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorsList , setErrorsList] = useState([])
      const [isLoading, setIsLoading] = useState(false);
  
  const [user , setUser] = useState({
      'email':'',
      'password':'',
    }) 


  let getInputData=(e)=>{
    let myUser = {...user} 
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  let validateDataForm =()=>{
    const schema = Joi.object({
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,20}$')),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } })
  })
  return schema.validate(user , {abortEarly: false});
  }

  const formSubmitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let validateData = validateDataForm();
    console.log(validateData);
    
    if(validateData.error){
      setErrorsList(validateData.error.details)
      setIsLoading(false); 
    }
    else{

      try {
        console.log("User data being sent:", user);
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", user);
        
        if (data.message === 'success') {
          localStorage.setItem('token', data.token);
          saveUserData();
          navigate('/');
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'An error occurred during login');
        console.error(error.response?.data || error.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    
  };
 
 
  return (
    <div className='my-3 p-5 w-75 m-auto'>
       <h1 className='my-5'>Login Form</h1>
       {errorsList.map((error, index) => {
        if (error.context.label === 'password') {
          return (
            <div key={index} className='alert alert-danger'>
              Invalid password please try again
            </div>
          );
        } else {
          return (
            <div key={index} className='alert alert-danger'>
              {error.message}
            </div>
          );
        }
      })}
       {errorMessage?<div className='alert alert-danger'>{errorMessage}</div>:""}
       <form onSubmit={formSubmitData}>
         
         <div className='inputData'>
           <label htmlFor='email'>Email</label>
           <input onChange={getInputData} type="text" name="email" id="email" className='form-control my-2' />
         </div>
         <div className='inputData '>
           <label htmlFor='password'>Password</label>
           <input onChange={getInputData} type="password" name="password" id="password" className='form-control my-2' />
         </div>
         <p className='my-3'>Don't have an account ? <Link to='/register' className='register'>Register</Link></p>
         <button className='btn btn-info float-end my-3'>
          {isLoading ? <i className='fa fa-spinner fa-spin' aria-hidden='true'></i> : 'Login'}
        </button>
         <div className='clear-fix'></div>

       </form>
     </div>
  )
}
 