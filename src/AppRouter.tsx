import { BrowserRouter, Routes, Route } from "react-router";
import { PageLayout, MovieDetails, FavoriteMovieList, MovieSearch, NotFound } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index path="/" element={<MovieSearch />} />
          <Route path="/movies" element={<FavoriteMovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
