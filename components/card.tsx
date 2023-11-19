import './card.scss'
import Image from 'next/image'

export default function Card({obj}: any) {
    return (
        <div className="card">
            <Image
                src={obj.cover}
                alt="Site Logo"
                width={300}
                height={450}
                priority
            />
            <div className="category">
                {obj.category} 
            </div>
            <div className="title">
                {obj.name} 
            </div>
        </div>
    );
}