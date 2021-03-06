import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=star&language=fr-FR"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            id="search-input"
            placeholder="Entrezle titre d'un film"
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>→</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.map((movie) => (
          <h2>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Form;
