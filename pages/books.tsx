import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from '../src/app/page.module.css';

export async function getStaticProps(context: any) {
    const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0517de3d6msh99455ecd0e913b5p17528cjsn0016bbf0ace2',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    let books;
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        books = JSON.parse(result);
    } catch (error) {
        console.error(error);
    }
  
    return {
      props: { books } // props will be passed to the page
    };
}

export default function Books( {books} : any) {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.grid}>
                {books.map((book: any, i: number) => <Card key={i} obj={book} />)}
            </div>
        </div>
    );
}