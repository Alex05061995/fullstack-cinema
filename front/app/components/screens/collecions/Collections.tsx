import {FC} from 'react'
import { ICollection } from './collection.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/Heading/Heading'
import styles from './collection.module.scss'
import Description from '@/components/ui/Heading/Description'
import CollectionItem from './CollectionItem'

const Collections: FC<{collections: ICollection[]}> = ({collections}) => {
  return (
    <Meta title='Discovery' description='Here all genres of films'>
        <Heading title='Discovery' className={styles.heading} /> 
        <Description  text='Here all genres of films' className={styles.description} />

        <section className={styles.collections}>
            {collections.map(c => <CollectionItem key={c._id} collection={c} />)}
        </section>
    </Meta>
  )
}

export default Collections