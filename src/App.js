import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  pop: [
    {
      Name: "One Direction",
      Song: "Night Changes"
    },
    {
      Name: "One Direction",
      Song: "Steal My Girl"
    }
  ],
  country: [
    {
      Name: "Keith Urban",
      Song: "Somewhere in my car"
    },
    {
      Name: "Keith Urban",
      Song: "Cop Car"
    }
  ],

  indie: [
    {
      Name: "Local Train",
      Song: "Choo Loo"
    },
    {
      Name: "Local Train",
      Song: "Dil Mere"
    }
  ]
};

const genreArray = Object.keys(musicDB);

export default function App() {
  const [selectedGenre, setGenreTab] = useState("pop");

  function onClickHandler(event) {
    let genre = event.target.textContent;
    setGenreTab(genre);
  }
  return (
    <div className="App">
      <h1>
        <span aria-label="song-emoji" role="img">
          🎼
        </span>{" "}
        good songs
      </h1>
      <p>Checkout the songs by selecting the genre </p>
      <hr />

      <div className="genreButtons">
        {genreArray.map((genre) => {
          return (
            <button key={genre} onClick={onClickHandler}>
              {genre}
            </button>
          );
        })}
      </div>
      <div className="genreSongs">
        <ul>
          {musicDB[selectedGenre].map((artist) => {
            return (
              <li key={artist}>
                <div>{artist.Song}</div>
                <div>
                  <small>
                    <em>{artist.Name}</em>
                  </small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
