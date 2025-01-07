import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import Movies from '../Movies/Movies';
import TvShows from '../Tvshows/TvShows';
import People from '../People/People';
import Register from '../Register/Register';
import LogIn from '../LogIn/LogIn';
import NotFound from '../NotFound/NotFound';
import { jwtDecode } from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Details from '../Details/Details';
import { Offline, Online } from "react-detect-offline";
import { Auth } from '../Context/Auth';


function App() {
 
let {userData , logout , saveUserData} = useContext(Auth);

  let routes = createBrowserRouter([
    {path:'/' , element:<MasterLayout userData={userData} logout={logout}/>
    , errorElement:<ProtectedRoute><NotFound/></ProtectedRoute>
    , children : [
      {index:true, element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
      // {path:'about' , element:<ProtectedRoute userData={userData}><About/></ProtectedRoute>},
      {path:'movies' , element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
      {path:'tvShows' , element:<ProtectedRoute userData={userData}><TvShows/></ProtectedRoute>},
      {path:'people' , element:<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
      {path:'details/:id/:mediaType' , element:<ProtectedRoute userData={userData}><Details/></ProtectedRoute>},
      {path:'register' , element:<Register/>},
      {path:'login' , element:<LogIn saveUserData={saveUserData}/>},
      
    ]
  }
  ])
  return (
    <>
    <div className='app-container'>
   
    <Offline>
      <div className='alert alert-danger text-center offline'>
      You are offline. please check your Internet connection </div></Offline>
    </div>
    <div >
     <RouterProvider  router={routes}/>
    </div>
    </>
  );
}

export default App;
