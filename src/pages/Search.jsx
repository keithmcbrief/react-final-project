import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  // http://www.omdbapi.com/?i=tt3896198&apikey=3ee4c002
  // http://www.omdbapi.com/?apikey=3ee4c002&

  function onSearch(input) {
    fetchMovies(input);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=3ee4c002&s=${input}`
    );
    setMovies(data);
    console.log(movies);
  }

  return (
    <>
      <nav className="nav__search">
        <div className="container">
          <div className="row">
            <div className="nav__container">
              <figure className="logo__wrapper">
                <img src="./assets/logo.png" alt="" />
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

      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search__container">
              <h1 className="browse">Browse our movies</h1>
              <div className="input__wrapper">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search by Title"
                  onChange={(event) => setInput(event.target.value)}
                  value={input}
                />
                <button className="btn btn__search" onClick={() => onSearch()}>
                  search
                </button>
              </div>
              <h2 className="search__text">Search results for:</h2>
              <div className="movies">
                {movies.map((movie) => (
                  <div className="movie">
                    <figure className="movie__img--wrapper">
                      <img
                        className="movie__img"
                        src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
                        alt=""
                      />
                    </figure>
                    <h3 className="movie__title">movie (Year)</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
