import Navbar from '../components/navbar';
import styles from '../styles/cart.module.scss';
import mainStyles from '../styles/main.module.scss';

export default function Checkout() {
    return <div className={mainStyles.main}>
        <Navbar>
            <div className={styles.cart_body}>
                <div className={styles.cart_title}>Checkout</div>
                <div className={styles.billing}>
                    <div className={styles.billing_form}>
                        Billing details
                    </div>
                    <div className={styles.order_details}></div>
                </div>
            </div>
        </Navbar>
    </div>
}