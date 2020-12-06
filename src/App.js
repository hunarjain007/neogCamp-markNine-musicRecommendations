import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  pop: [
    {
      Name: "One Direction",
      Song: "Night Changes"
    }
  ],
  country: [
    {
      Name: "Keith Urban",
      Song: "Somewhere in my car"
    }
  ],

  indie: [
    {
      Name: "Local Train",
      Song: "Choo Loo"
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
      <h1>Good Songs</h1>
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
                <div>{artist.Name}</div>
                <div>{artist.Song}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
