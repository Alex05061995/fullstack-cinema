import GenreEdit from '@/components/screens/admin/genreEdit/GenreEdit';
import { NextPageAuth } from '@/shared/types/auth.types'
import React from 'react'

const GenreEditPage: NextPageAuth = () => {
  return (
    <GenreEdit />
  )
}

GenreEditPage.isOnlyAdmin = true;

export default GenreEditPage