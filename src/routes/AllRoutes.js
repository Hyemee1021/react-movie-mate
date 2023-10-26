import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { MovieDetails } from "../pages/MovieDetails";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";
import React from "react";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />

        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top-rated" />}
        />

        {/* as a props I pass api down to Route */}
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />

        <Route path="/search" element={<Search apiPath="search/movie" />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
