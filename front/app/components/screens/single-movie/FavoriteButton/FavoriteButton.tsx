import { FC, useState, useEffect } from 'react'
import { useFavorites } from '../../favorites/useFavorites';
import { useMutation } from 'react-query';
import { userService } from '@/services/user.service';
import { toastError } from '@/utils/toast-error';
import styles from './favoriteButton.module.scss';
import classNames from 'classnames';
import IheartImage from './heart-animation.png';

const FavoriteButton: FC<{movieId: string}> = ({movieId}) => {
    const [isSmashed, setIsSmashed] = useState(false);
    const {favorites, refetch} = useFavorites();

    useEffect(() => {
        if(!favorites) return;
        const isHasMovie = favorites.some(f => f._id === movieId);
        if(isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
    }, [favorites, isSmashed, movieId])

    const {mutateAsync} = useMutation('update favorites', () => userService.toggleFavorite(movieId), {
        onError: (error) => {
            toastError(error, 'Update favorite list')
        },
        onSuccess: () => {
            setIsSmashed(!isSmashed);
            refetch();
        }
    })

  return (
    <button onClick={() => mutateAsync()} className={classNames(styles.button, {[styles.animate] : isSmashed})} style={{backgroundImage: !IheartImage ? `url('../media/heart-animation.png')` : `url(${IheartImage.src})`}} />
  )
}

export default FavoriteButton