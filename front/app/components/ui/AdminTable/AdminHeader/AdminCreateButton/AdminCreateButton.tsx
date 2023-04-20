import Button from '@/components/ui/FormElement/Button';
import {FC} from 'react';
import styles from '../adminHeader.module.scss'

const AdminCreateButton:FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <Button onClick={onClick}>Create new</Button>
  )
}

export default AdminCreateButton