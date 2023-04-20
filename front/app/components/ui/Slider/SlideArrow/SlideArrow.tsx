import {FC} from 'react'
import styles from './slideArrow.module.scss';
import classNames from 'classnames';
import { MaterialIcon } from '../../MaterialIcon';

interface ISlideArrow {
    variant: 'left' | 'right';
    clickHandler: () => void;
}

const SlideArrow: FC<ISlideArrow> = ({clickHandler,variant}) => {

    const isLeft = variant === 'left';

  return (
    <button className={classNames(styles.arrow, {[styles.left]: isLeft, [styles.right]: !isLeft} )} onClick={clickHandler}>
        <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'}/>
    </button>
  )
}

export default SlideArrow