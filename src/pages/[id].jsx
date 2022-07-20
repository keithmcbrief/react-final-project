import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, SearchCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();

  async function getMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=3ee4c002&i=${id}`
    );
    setMovieData(data);
    console.log(data);
  }

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <nav className="nav__search">
        <div className="container">
          <div className="row">
            <div className="nav__container">
              <figure className="logo__wrapper">
                <img
                  src="https://cdn.discordapp.com/attachments/678108003479715870/999077225800409098/ipiccy_image_6.png"
                  alt=""
                />
              </figure>
              <div className="nav__links">
                <a className="nav__link" href="/">
                  Home
                </a>
                <a className="nav__link" href="/search">
                  Find your movie
                </a>
                <button className="contact">CONTACT</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="row">
            <div className="back__wrapper" onClick={() => navigate("/search")}>
              <ArrowLeftIcon className="btn__back" />{" "}
              <span className="back__text">Movies</span>
            </div>
            <div className="container__flex">
              <figure className="description__img--wrapper">
                <img src={movieData.Poster} alt="" className="movie__image" />
              </figure>
              <div className="description__content--wrapper">
                <h1 className="description__title">
                  {movieData.Title} ({movieData.Year})
                </h1>
                <h3 className="description__runtime">
                  Runtime: {movieData.Runtime}
                </h3>
                <h3 className="description__actors">
                  Actors: {movieData.Actors}
                </h3>
                <h3 className="description__genre">Genre: {movieData.Genre}</h3>
                <h3 className="description__ratings">
                  imDB Rating: {movieData.imdbRating}
                </h3>
                <h3 className="description__language">
                  Languages: {movieData.Language}
                </h3>
                <h3 className="description__summary">Summary</h3>
                <p className="description__para">{movieData.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
