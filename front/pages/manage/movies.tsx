import MovieList from "@/components/screens/admin/movies/MovieList";
import { NextPageAuth } from "@/shared/types/auth.types"



const MoviesListPage: NextPageAuth = () => {
  return (
    <MovieList />
  )
}

MoviesListPage.isOnlyAdmin = true;

export default MoviesListPage