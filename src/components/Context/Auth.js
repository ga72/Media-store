import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export let Auth = createContext(null);
export default function AuthProvider(props){
    const [userData , setUserData] = useState(null)

    let saveUserData =()=>{
      let encodedData = localStorage.getItem('token');
      let decodedData = jwtDecode(encodedData);
      setUserData(decodedData);
    }
  
    let logout=()=>{
      localStorage.removeItem('token');
      setUserData(null);
       return <Navigate to='/login'/>
    }
    
    useEffect(()=>{
      if(localStorage.getItem('token')){
        console.log(userData);
        saveUserData();
      }
    } , [])
    return <Auth.Provider value={{userData , logout , saveUserData}}>
        {props.children}
    </Auth.Provider>
}