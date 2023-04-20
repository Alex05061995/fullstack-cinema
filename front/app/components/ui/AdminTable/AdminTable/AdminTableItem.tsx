import {FC} from 'react'
import { IAdminTableItem } from './admin-table.interface'
import AdmintActions from './AdminActions/AdmintActions';
import styles from './adminTable.module.scss';

const AdminTableItem:FC<IAdminTableItem> = ({removeHandler, tableItem}) => {
  let i = 0
  return (
    <div className={styles.item}>
      {tableItem.items.map(value => <div key={value + i++}>{value}</div>)}
      <AdmintActions editUrl={tableItem.editUrl} removeHandler={removeHandler}/>
    </div>
  )
}

export default AdminTableItem