import { useParams, Link, useNavigate } from "react-router-dom";
import { moviesData } from "../Data";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log(loading);
      const foundMovie = moviesData.find((movie) => movie.id === Number(id));
      setMovie(foundMovie);
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, [id]);



  return (
    <div className="max-w-4xl mx-auto p-5">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back
      </button>
      {loading && (
        <div className="flex justify-center items-center mt-24">
          <Spin />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
      <p className="mb-5">{movie.description}</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDescription;
