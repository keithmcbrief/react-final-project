import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Movie from "../components/Movie";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const params = useParams();

  function onSearch() {
    setLoading(true);
    setTimeout(() => {
      fetchOnSearch(input);
    }, 300);
  }

  useEffect(() => {
    if (!params.input && !input) {
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        fetchOnSearch(input);
      }, 300);
    }
  }, []);

  async function fetchOnSearch() {
    if (params.input || input) {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=3ee4c002&s=${params.input || input}`
      );
      setMovies(data.Search);
      setLoading(false);
    }
  }

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
                <Link className="nav__link" to="/">
                  Home
                </Link>
                <Link className="nav__link" to="/search">
                  Find your movie
                </Link>
                <button className="contact">CONTACT</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="search">
        <div className="container">
          <div className="row__search">
            <h1 className="browse">Browse our movies</h1>
            <div className="input__wrapper">
              <input
                className="search__input"
                type="text"
                placeholder="Search by Title"
                onChange={(event) => setInput(event.target.value)}
                value={input}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <SearchIcon className="search__icon" onClick={() => onSearch()} />
            </div>
            <h2 className="search__text">
              Search results for: {params.input || input}
            </h2>
            <div className="movies">
              {loading && (params.input || input)
                ? new Array(6).fill(0).map((element) => (
                    <div className="movie__skeleton">
                      <div className="movie__skeleton--img" />
                      <div className="movie__skeleton--title" />
                    </div>
                  ))
                : ""}
              {/* {loading &&
                new Array(6).fill(0).map((element) => (
                  <div className="movie__skeleton">
                    <div className="movie__skeleton--img" />
                    <div className="movie__skeleton--title" />
                  </div>
                ))} */}

              {!loading &&
                movies
                  .map((movie) => (
                    <Movie
                      id={movie.imdbID}
                      image={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                    />
                  ))
                  .slice(0, 6)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
