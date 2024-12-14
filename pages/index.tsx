import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from '../styles/main.module.scss';
import { useEffect, useState } from 'react';

export default function Index() {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const booksLayout = getBooks();

    useEffect(() => {
        fetch('/api/book')
        .then((res) => res.json())
        .then((data) => {
          setBooks(data)
          setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function getBooks() {
        if (isLoading) return <p>Loading...</p>
        if (!books) return <p>No profile data</p>
        return <>{books.map((book: any, i: number) => <Card key={i} obj={book} />)}</>
    }


    return (
        <div className={styles.main}>
            <Navbar>
                <div className={styles.grid}>
                    {booksLayout}
                </div>
            </Navbar>
        </div>
    );
}