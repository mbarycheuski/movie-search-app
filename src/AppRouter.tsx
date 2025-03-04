import { BrowserRouter, Routes, Route } from "react-router";
import { PageLayout, MovieDetails, MovieList, MovieSearch, NotFound } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index path="/" element={<MovieSearch />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
