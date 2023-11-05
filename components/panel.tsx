import './panel.scss'
import Image from 'next/image'

export default function Panel() {
    return (
        <div className="panel_content">
            <div className="panel_content-left">
                <div className="title">
                    The Sons of the Empire 
                </div>
            </div>
            <div className="panel_content-right">
                <Image
                    src="/author-book-store-hero-book-cover-img.jpg"
                    alt="Site Logo"
                    width={400}
                    height={600}
                    priority
                />
            </div>
        </div>
    );
}