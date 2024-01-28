import styles from '../styles/table.module.scss';

export default function Table({columns, rows}: any) {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                {columns.map((column: any, index: number) => <p className={styles.cell} key={index}>{column.name}</p>)}
            </div>
            <div className={styles.row}>{rows.map((row: any, index: number) => <p className={styles.cell} key={index}>{row.name}</p>)}</div>
        </div>
    );
}