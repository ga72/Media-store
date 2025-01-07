import React from "react";
import style from '../Home/Home.module.scss'

export default function Footer({ userData }) {
  console.log(userData);

  return (
    <div >
      {userData ? (
        <div className={`text-center  p-3 ${style.footer}`}>
          <h1>About The Website</h1>
          <p className="my-4">
            This website is connected with the TMDB which is the database which
            give us all trending like movied , tvShows , people , etc{" "}
          </p>

          <div className="socialMediaIcons my-3 ">
            <i className="fab fa-facebook mx-2 fa-xl"></i>
            <i className="fab fa-github mx-2 fa-xl"></i>
            <i className="fab fa-instagram mx-2 fa-xl"></i>
            <i className="fab fa-youtube mx-2 fa-xl"></i>
          </div>

          <p className="my-3">copyright © noxe 2024</p>
        </div>
      ) : null}
    </div>
  );
}
