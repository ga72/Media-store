import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  let params = useParams();
  const [itemDetails, setItemDetails] = useState({});
  console.log(params);

  useEffect(() => {
    getItemDetails();
  }, []);

  let getItemDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.mediaType}/${params.id}?language=en-US&api_key=8dd3f283ba8e54964c4f468ff4668f65`
    );
    setItemDetails(data);
    console.log(data);
  };

  return (
    <>
      <div className="row py-5 my-5 m-auto ">
        <div className="col-md-5 ">
          {params.mediaType === "person" ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${itemDetails.profile_path}`}
              className="w-75"           
              alt={itemDetails.name}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${itemDetails.poster_path}`}
              className="w-75"
              alt=""
            />
          )}
        </div>

        <div className="col-md-7 my-5">
          <div className="details">
            <h3>
              {itemDetails.name}
              {itemDetails.title}
            </h3>
            <p>{itemDetails.tagline}</p>

            {itemDetails.genres &&
              itemDetails.genres.map((genre, index) => (
                <button key={index} className="btn btn-info m-2">
                  {genre.name}
                </button>
              ))}

            {params.mediaType === "person" ? (
              <>
              {itemDetails.known_for_department ? <button className="btn ">
                  {itemDetails.known_for_department}
                </button> : null }
                
                {itemDetails.birthday ? (
                  <h5 h5 className="my-3">
                    birthday : {itemDetails.birthday}
                  </h5>
                ) : (
                  null
                )}
                {itemDetails.popularity ? <h5 h5 className="my-3">
                  popularity : {itemDetails.popularity}
                </h5> : null}
                {itemDetails.place_of_birth ? <h5 h5 className="my-3">
                  place_of_birth : {itemDetails.place_of_birth}
                </h5> : null}
                {itemDetails.biography ? <> <h5>Biography :</h5>
                  <p>{itemDetails.biography}</p></> : null}
                
              </>
            ) : (
              <>
                <h5 className="my-3">vote : {itemDetails.vote_average}</h5>
                <h5 className="my-3">vote_count : {itemDetails.vote_count}</h5>
                <h5 className="my-3">popularity : {itemDetails.popularity}</h5>
                <h5 className="my-3">
                  release_date : {itemDetails.release_date}
                </h5>
                <p className="my-4">{itemDetails.overview}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
