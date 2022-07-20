import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const params = useParams()
  async function getMovie() {
    const movieData = await axios.get(`https://www.omdbapi.com/?apikey=3ee4c002&i=${params}`)
    console.log(movieData)
  }
  getMovie()
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
            <div className="container__flex">
              <figure className="description__img--wrapper">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
                  alt=""
                  className="movie__image"
                />
              </figure>
              <div className="description__content--wrapper">
                <h2 className="description__title">movie</h2>
                <h3 className="description__year">Released: 2020</h3>
                <p className="description__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis autem atque ex odit qui totam repellendus
                  voluptas accusantium beatae dolorum.
                </p>
                <p className="description__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis autem atque ex odit qui totam repellendus
                  voluptas accusantium beatae dolorum.
                </p>
                <p className="description__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis autem atque ex odit qui totam repellendus
                  voluptas accusantium beatae dolorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
