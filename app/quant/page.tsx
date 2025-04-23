'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 
import {  useLocale, useTranslations } from 'next-intl';
import { Locale } from '../../i18n/config';

interface Product {
    name: string;
    name_en: string;
    source: string;
    apr: number;
    drawdown: number;
    currency: string;
    strategy: string;
    sub_status: string;
    entry: string;
    description: string;
}

const Investment: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const locale = useLocale() as Locale;
    const t = useTranslations();

    useEffect(() => {
        fetch('/api/investment_data')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data);
              setLoading(false);
          });
    }, []);

    return (
        <div className={styles.productList}>
            {loading ? (
                <div className={styles.loading}>LOADING...</div>
            ) : (
                products.map((product, index) => (
                    <div key={index} className={styles.productCard}>
                        <table className={styles.productTable}>
                            <thead className={styles.tableHeader}>
                                <tr>
                                    <td className={styles.title}>
                                        {locale === 'zh' ? product.name : product.name_en}
                                    </td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                <tr>
                                    <td className={styles.subtitle} style={{ padding: '2px 8px'}}>{t('verify')} {product.source}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ height: '10px', backgroundColor: 'transparent' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        {t('apr')} <span className={styles.value } style={{color: 'green'}}>{product.apr}%</span>
                                    </td>
                                    <td>
                                        {t('drawdown')} <span className={styles.value } style={{color: 'red'}}>{product.drawdown}%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        {t('currency')} <span className={styles.value }>{product.currency}</span>
                                    </td>
                                    <td>
                                        {t('strategy')} <span className={styles.value }>{product.strategy}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        {t('status')} <span className={styles.value }>{product.sub_status}</span>
                                    </td>
                                    <td>
                                        {t('entry')} <span className={styles.value }>{product.entry}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.productDescription } style={{ padding: '0px 8px'}}>{product.description}</div>
                    </div>
                ))
            )}
            <div className={styles.invisiable}></div>
            <div className={styles.invisiable}></div>
        </div>
    );
};

export default Investment;
