import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/drawer.module.scss';
import Image from 'next/image'

export default function Drawer({onClickCloseCart}: any) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
       fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    async function onRemoveItem(book:any){
        await fetch('/api/cart',{
            method: "DELETE",
            body: JSON.stringify({
                id: book.id,
            })
        });
        fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }

    function drawerItems() {
        if (isLoading) return <p>Loading...</p>
        if (!data.length) return <p>No profile data</p>
        return <ul>{data.map((book: any)=> <li key={book.id}>
            <div className={styles.book}>                
                <Image
                    src={book.cover}
                    alt="book cover"
                    width={64}
                    height={64}
                    priority
                />
                <div className={styles.book_details}>
                    <div className="book_name"> {book.name}</div>
                    <div className="book_price">{book.quantity} x {book.price}</div>
                </div>
            </div>
            <button className={styles.remove_icon} onClick={() => {onRemoveItem(book)}}>             
                <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                </svg>
            </button>    
            </li>)}</ul>
    }
   
    return (
        <>
        {createPortal(
            <div className={styles.drawer_wrapper}>
                <div className={styles.gray_space}></div>
                <div className={styles.drawer}>
                    <div className={styles.header}>
                        Shopping Cart
                        <button
                            type='button'
                            className={styles.icon_button_class}
                            onClick={onClickCloseCart}
                        >
                            <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.body}>{drawerItems()}</div>
                    <div className={styles.footer}>
                        <div className={styles.payment}>
                            <div className="text">Sub Total:</div> 
                            <div>${data.reduce((acc, a: any) => acc +  a.quantity * a.price.substring(1), 0)}</div>
                        </div>
                        <div className={styles.action_buttons}>
                            <a href='./cart'>View cart</a>
                            <a href='./checkout'>Checkout</a>
                        </div>
                    </div>
                </div>
            </div>, 
        document.body)}
        </>
    );
}
