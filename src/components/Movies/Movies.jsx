import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import style from '../Home/Home.module.scss'
import { Link } from 'react-router-dom';
import { MediaContext } from '../Context/MediaStore';
import IsLoading from '../IsLoading/IsLoading';

export default function Movies() {

  let {trendingMovies} = useContext(MediaContext);

  return (
    <div className="row py-5 my-5">
     <div className="col-md-4">
      <div className={`${style.brdr} w-25 my-3` }></div>
      <h3>Trending</h3>
      <h3>movies</h3>
      <h3>to watch now</h3>
      <p className={`${style.clr}`}>most watched movies by days</p>
      <div className={`${style.brdr} w-75 my-3` }></div>

    </div>

    {
      trendingMovies? trendingMovies.map((item, index) => (
  
        <div key={index} className=" col-md-2 my-3">
       <Link to={`/details/${item.id}/${item.media_type}`} >
       <div className={`card ${style.card} position-relative`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="w-100"
              alt={item.title}
            />
            <div className="card-body">
              <h4>{item.title}</h4>
            </div>
            <div
              className={`position-absolute top-0 end-0 p-2 ${style.rate} d-flex align-items-center`}
            >
              <i className="fa fa-star me-1"></i>
              {item.vote_average.toFixed(1)}
            </div>
          </div></Link>
        </div>
     
    )): <IsLoading/>
    }
  </div>
  )
}
