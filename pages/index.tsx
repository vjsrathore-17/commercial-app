import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from '../styles/main.module.scss';
import { useEffect, useState } from 'react';

export default function Index() {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const url = 'https://book-finder1.p.rapidapi.com/api/search?book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0517de3d6msh99455ecd0e913b5p17528cjsn0016bbf0ace2',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };

    const booksLayout = getBooks();

    useEffect(() => {
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.results)
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