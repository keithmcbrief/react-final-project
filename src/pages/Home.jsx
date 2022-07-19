import React from "react";
import { useNavigate } from "react-router-dom"

export default function Home() {
  let navigate = useNavigate()

  return (
    <div className="Home">
      <nav>
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

      <section id="landing">
        <div className="container">
          <div className="row row__landing">
            <div className="content__wrapper">
              <h1 className="title">
                America's most awarded movie subscription platform
              </h1>
              <h2 className="sub-title">
                FIND YOUR DREAM MOVIE WITH{" "}
                <span className="secondary">BLINKER</span>
              </h2>
              <div className="search__wrapper">
                <input
                  id="searchTxt"
                  className="search__input"
                  type="text"
                  placeholder="Search by Title"
                  onkeyup="search(event)"
                />
                <button
                  className="btn btn__home"
                  onClick={() => navigate('search')}
                >
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* <section id="movies">
        <div className="container">
          <div className="row row__movies">
            <div className="movies"></div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
