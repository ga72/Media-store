import React from 'react'
import style from './Nabar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar({userData , logout }) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${style.navBg} fixed-top`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Noxe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {
              userData ? <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link active ${style.navLink}`} aria-current="page" to=''>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active ${style.navLink}`} aria-current="page" to="movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active ${style.navLink}`} aria-current="page" to="tvShows">TvShows</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active ${style.navLink}`} aria-current="page" to="people">People</Link>
                </li>
              </ul> : ''
            }
            <ul className="navbar-nav ms-auto">
              <div className='socialMediaIcons d-flex align-items-center '>
                <i className='fab fa-facebook mx-2'></i>
                <i className='fab fa-github mx-2'></i>
                <i className='fab fa-instagram mx-2'></i>
                <i className='fab fa-youtube mx-2'></i>
              </div>
              {
                userData ? <li className="nav-item">
                  <div className='d-flex align-items-center  ms-2'>
                    <Link>Hello {userData.name}</Link>
                    <Link className={`nav-link active ${style.navLink} ms-2`} aria-current="page" to="logIn" onClick={logout} >Log out</Link>

                  </div>
                </li> :
                  <>
                    <li className="nav-item">
                      <Link className={`nav-link active ${style.navLink}`} aria-current="page" to="logIn">Log in</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link active ${style.navLink}`} aria-current="page" to="register">Register</Link>
                    </li>
                  </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}