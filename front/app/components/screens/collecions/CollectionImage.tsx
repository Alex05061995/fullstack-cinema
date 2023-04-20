import {FC} from 'react'
import { ICollection } from './collection.interface'
import Image from 'next/image'
import imagePlug from '../../../assets/images/plug.png';

const CollectionImage: FC<{collection: ICollection}> = ({collection: {image, title}}) => {
  return (
   <Image alt={title} src={image ? image : imagePlug} fill draggable={false}/> 
  )
}

export default CollectionImage