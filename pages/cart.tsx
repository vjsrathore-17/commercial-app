import Navbar from "../components/navbar";
import Table from "../components/table";
import styles from '../styles/cart.module.scss';
import mainStyles from '../styles/main.module.scss';
import { useState, useEffect } from 'react';

export default function Cart() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
       fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
   
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const columns: any = [
        {
            name: ''
        },
        {
            name: 'Product'
        },
        {
            name: 'Price'
        },
        {
            name: 'Quantity'
        },
        {
            name: 'Subtotal'
        }
    ]
    async function onRemoveItem(row: any) {
        await fetch('/api/cart',{
            method: "DELETE",
            body: JSON.stringify({
                id: row.id,
            })
        });
        fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }

    return (
        <div className={mainStyles.main}>
            <Navbar />
            <div className={styles.cart_body}>
                <div className={styles.cart_title}>Cart</div>
                <div className={styles.cart_table}><Table columns={columns} rows={data} onRemoveItem={onRemoveItem}></Table></div>
            </div>
        </div>
    );
}