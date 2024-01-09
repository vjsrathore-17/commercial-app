import styles from '../styles/panel.module.scss';
import Image from 'next/image'

export default function Panel({obj}: any) {
    return (
        <div className={styles.panel_content}>
            <div className="panel_content-left">
                <div className={styles.title}>
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