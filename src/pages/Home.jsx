import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingImg from "../assets/landingimg.svg";
import { SearchIcon, RefreshIcon } from "@heroicons/react/solid";

export default function Home() {
  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function homeSearch(event) {
    setLoading(true);
    setTimeout(() => {
      navigate(`/search/${input}`);
    }, 300);
  }

  const search = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Home">
      <nav>
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
                <a className="nav__link" href="search">
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
                The perfect movie is waiting for you at{" "}
                <span className="secondary">MovieHub</span>
              </h2>
              <div className="search__wrapper">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search by Title"
                  onChange={(event) => setInput(event.target.value)}
                  value={input}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      homeSearch();
                    }
                  }}
                />
                <button className="btn btn__home" onClick={() => homeSearch()}
                disabled={!input}>
                  {loading && <RefreshIcon className="loading" />}
                  {!loading && <SearchIcon className="home__search--icon" />}
                </button>
              </div>
              <figure className="landing__img--wrapper">
                <img className="landing__img" src={LandingImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
