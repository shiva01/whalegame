'use client';

import Link from "next/link";
import styles from '../styles/Header.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale} from '../../services/locale';
import { Locale } from '../../i18n/config';
import { useState } from 'react';

const Header = () => {
    const t = useTranslations();
    const [locale, setLocale] = useState<Locale>(useLocale() as Locale); 

    const toggleLocale = () => {
        const newLocale = locale === 'zh' ? 'en' : 'zh';
        setLocale(newLocale);
        setUserLocale(newLocale);
    };

    return (
        <nav className={styles.navbar}>                    
            <div className={styles.logo}>Trust and Comfort</div>
            <ul className={styles.navLinks}>
                <li><Link href="/chinesestock"><span>{t('chinesestock')}</span></Link></li>
                <li><Link href="/cryptoproduct"><span>{t('cryptoproduct')}</span></Link></li>
                <li> </li>
            </ul>
            <div className={styles.localeButton} onClick={toggleLocale}>
                {locale === 'zh' ? 'English' : '中文'}
            </div>
        </nav>
    );
};

export default Header;

