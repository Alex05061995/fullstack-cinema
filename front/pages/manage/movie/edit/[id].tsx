import MovieEdit from '@/components/screens/admin/movieEdit/MovieEdit';
import { NextPageAuth } from '@/shared/types/auth.types'
import React from 'react'

const MovieEditPage: NextPageAuth = () => {
  return (
    <MovieEdit />
  )
}

MovieEditPage.isOnlyAdmin = true;

export default MovieEditPage