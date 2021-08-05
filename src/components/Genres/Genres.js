import React from 'react';
// import { Chip } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=9e32ac29d2b4974c5bd7eb49b0c8a7bf&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Genres;
