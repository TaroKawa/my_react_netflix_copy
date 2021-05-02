import React ,{useState,useEffect}from 'react';
import YouTube from "react-youtube";
import axios from "./../axios"
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;



  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};


export const Row = ({ title, fetchUrl }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return(
      <div className="Row" /> 
  );
};