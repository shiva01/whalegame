'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 
import { useTranslations } from 'next-intl';

interface Product {
    asset: string;
    source: string;
    interest_rate: number;
    mortgage_rate: number;
    supply_amount: string;
    status: string;
    description: string;
}

const LoanPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const t = useTranslations();

    useEffect(() => {
        fetch('/api/loan_data')
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
                                    <td className={styles.title}>{product.asset}</td>
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
                                        {t('interest')} <span className={styles.value} style={{ color: 'green'}}>{product.interest_rate}%</span> 
                                    </td>
                                    <td>
                                        {t('mortgage')} <span className={styles.value} style={{ color: 'red'}}>{product.mortgage_rate}%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        {t('amount')} <span className={styles.value}>{product.supply_amount}</span> 
                                    </td>
                                    <td>
                                        {t('status')} <span className={styles.value}>{product.status}</span>             
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.productDescription} style={{ padding: '0px 8px'}}>{product.description}</div>
                    </div>
                ))
            )}
            <div className={styles.invisiable}></div>
            <div className={styles.invisiable}></div>
        </div>
    );
};

export default LoanPage;
