import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import SlideArrow from './SlideArrow/SlideArrow';
import SlideItem from './SlideItem';
import { ISlider } from './slider.interface';
import styles from './slider.module.scss';
import { useSlider } from './useSlider';

interface ISwiper {
	slides: ISlider[];
	buttonTitle?: string;
}

const Slider: FC<ISwiper> = ({ slides, buttonTitle }) => {
	const { slideIn, index, isNext, isPrev, handleClick } = useSlider(
		slides.length
	);

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames={'slide-animation'}
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	);
};

export default Slider;
