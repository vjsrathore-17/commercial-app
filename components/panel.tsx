import './panel.scss'
import Image from 'next/image'

export default function Panel({obj}: any) {
    return (
        <div className="panel_content">
            <div className="panel_content-left">
                <div className="title">
                    {obj.name} 
                </div>
            </div>
            <div className="panel_content-right">
                <Image
                    src={obj.cover}
                    alt="Site Logo"
                    width={400}
                    height={600}
                    priority
                />
            </div>
        </div>
    );
}