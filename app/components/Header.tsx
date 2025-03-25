'use client';

import Link from "next/link";
import styles from '../styles/Header.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { getUserLocale, setUserLocale} from '../../services/locale';
import { Locale } from '../../i18n/config';
import { useState, useEffect } from 'react';

const Header = () => {
    const t = useTranslations();
    const [locale, setLocale] = useState<Locale>(useLocale()); 

    const toggleLocale = () => {
        const newLocale = locale === 'zh' ? 'en' : 'zh';
        setLocale(newLocale);
        setUserLocale(newLocale);
    };

    return (
        <nav className={styles.navbar}>                    
            <div className={styles.logo}>Trust and Comfort</div>
            <ul className={styles.navLinks}>
                <li><Link href="/quant"><span>{t('quant')}</span></Link></li>
                <li><Link href="/loan"><span>{t('loan')}</span></Link></li>
                <li><Link href="/hedging"><span>{t('hedging')}</span></Link></li>
                <li><Link href="/smart-money"><span>{t('smart-money')}</span></Link></li>
                <li> </li>
            </ul>
            <div className={styles.localeButton} onClick={toggleLocale}>
                {locale === 'zh' ? 'English' : '中文'}
            </div>
        </nav>
    );
};

export default Header;

