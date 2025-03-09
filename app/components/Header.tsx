'use client';

import Link from "next/link";
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.navbar}>                    
            <div className={styles.logo}>Trust and Comfort</div>
            <ul className={styles.navLinks}>
                <li><Link href="/investment"><span>Investment</span></Link></li>
                <li><Link href="/loan"><span>Loan</span></Link></li>
                <li><Link href="/hedging"><span>Hedging</span></Link></li>
                <li><Link href="/smart-money"><span>Smart Money</span></Link></li>
            </ul>
        </nav>
    );
};

export default Header;

