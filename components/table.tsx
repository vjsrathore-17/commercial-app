import styles from '../styles/table.module.scss';
import Image from 'next/image';

export default function Table({columns, rows, onRemoveItem}: any) {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                {columns.map((column: any, index: number) => <p className={styles.cell} key={index}>{column.name}</p>)}
            </div>
            {rows.length === 0 ? <div className={styles.nothing_found}>No books added</div> : rows.map((row: any,index: number) =>  <div className={styles.row} key={index}>
                <div className={styles.cell}>
                    <div className={styles.first_column}>
                        <button className={styles.remove_icon} onClick={() => {onRemoveItem(row)}}>             
                            <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                            </svg>
                        </button>
                        <Image
                            src={row.cover}
                            alt="Site Logo"
                            width={70}
                            height={105}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cell}>{row.name}</div>
                <div className={styles.cell}>{row.price}</div>
                <div className={styles.cell}>{row.quantity}</div>
                <div className={styles.cell}>${row.quantity * row.price.substring(1)}</div>
            </div>)}
        </div>
    );
}