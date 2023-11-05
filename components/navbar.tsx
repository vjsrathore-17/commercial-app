import './navbar.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="top-app-bar">
            <div className="top-app-bar__left">
                <Image
                    src="/site-logo.svg"
                    alt="Site Logo"
                    width={200}
                    height={50}
                    priority
                />
            </div>
            <div className="top-app-bar__center">
                <Link href="/">Home</Link>
                <Link href="/books">Books</Link>
                <Link href="/about">About Author</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="top-app-bar__right">
                <Image
                    src="/search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                    priority
                />
                <Image
                    src="/basket.svg"
                    alt="Shopping Cart"
                    width={22}
                    height={22}
                    priority
                />
            </div>
        </div>
    );
}