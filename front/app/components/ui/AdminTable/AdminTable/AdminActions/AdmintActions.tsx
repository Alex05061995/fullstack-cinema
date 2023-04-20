import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useRouter } from 'next/router';
import {FC} from 'react'
import styles from '../adminTable.module.scss';

interface IAdmintActions {
    editUrl: string;
    removeHandler: () => void
}

const AdmintActions:FC<IAdmintActions> = ({editUrl, removeHandler}) => {
  const {push} = useRouter();
  return (
    <div className={styles.actions}>
      <button onClick={() => push(editUrl)}>
        <MaterialIcon name='MdEdit' />
      </button>
      <button onClick={removeHandler}>
        <MaterialIcon name='MdClose' />
      </button>
    </div>
  )
}

export default AdmintActions