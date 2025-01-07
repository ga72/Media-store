import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2'

export default function MasterLayout({userData , logout}) {

 
  return (
    <div>
      <Navbar userData={userData} logout={logout} />
     <div className="container">
     <Outlet/>
     </div>
     <div className='app-container'>
     <Footer userData={userData}/>

     </div>
    </div>
  )
}
