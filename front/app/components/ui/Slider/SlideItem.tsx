import {FC} from 'react'
import { ISlider } from './slider.interface'
import { useRouter } from 'next/router';
import styles from './slider.module.scss';
import Image from 'next/image';

interface ISlideItem {
    slide: ISlider;
    buttonTitle?: string;
}

const SlideItem:FC<ISlideItem> = ({slide,buttonTitle = 'watch'}) => {
    const {push} = useRouter()
  return (
    <div className={styles.slide}>
        {slide.bigPoster && (<Image fill className={styles.image} src={slide.bigPoster} alt={slide.title} draggable='false' unoptimized priority />)}
        <div className={styles.content}>
            <div className={styles.heading}>{slide.title}</div>
            <div className={styles.subHeading}>{slide.subTitle}</div>
            <button className={styles.button} onClick={() => push(slide.link)}>
                {buttonTitle}
            </button>
        </div>
    </div>
  )
}

export default SlideItem