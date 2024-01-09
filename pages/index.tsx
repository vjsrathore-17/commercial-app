import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from '../styles/main.module.scss';

export async function getStaticProps(context: any) {
    const url = 'https://book-finder1.p.rapidapi.com/api/search?book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0517de3d6msh99455ecd0e913b5p17528cjsn0016bbf0ace2',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };

    let books: Array<any> = [];
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        books = JSON.parse(result).results;
    } catch (error) {
        console.error(error);
    }
  
    return {
      props: { books } // props will be passed to the page
    };
}

export default function Index( {books} : any) {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.grid}>
                {books.map((book: any, i: number) => <Card key={i} obj={book} />)}
            </div>
        </div>
    );
}