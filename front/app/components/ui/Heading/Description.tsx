import {FC} from 'react';
import parser from 'html-react-parser';
import classNames from 'classnames';

const Description:FC<{text: string, className?: string}> = ({text, className = ''}) => {
  return (
    <div className={classNames('text-lg font-light text-white text-opacity-60', className)}>
        {parser(text)}
    </div>
  )
}

export default Description