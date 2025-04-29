'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 
import { useLocale, useTranslations } from 'next-intl';
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
    description_en: string;
}

interface Loan {
    asset: string;
    asset_en: string;
    source: string;
    interest_rate: number;
    mortgage_rate: number;
    supply_amount: string;
    status: string;
    description: string;
}

const Investment: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loans, setLoans] = useState<Loan[]>([]);
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

    useEffect(() => {
        fetch('/api/loan_data')
          .then((response) => response.json())
          .then((data) => {
              setLoans(data);
              setLoading(false);
          });
    }, []);

    return (
        loading ? (
            <div className={styles.loading}>LOADING...</div>
        ) : (
            <div>
                <h2 className={styles.productListTitle}>{t('quant')}</h2>
                <div className={styles.productList}>
                    {
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
                                <div className={styles.productDescription } style={{ padding: '0px 8px'}}>{locale === 'zh' ? product.description : product.description_en}</div>
                            </div>
                        ))
                    }
                    {products.length % 3 === 1 && (
                        <>
                            <div className={styles.invisiable}></div>
                            <div className={styles.invisiable}></div>
                        </>
                    )}
                    {products.length % 3 === 2 && (
                        <div className={styles.invisiable}></div>
                    )}
                </div>
                <h2 className={styles.productListTitle}>{t('loan')}</h2>
                <div className={styles.productList}>
                    {
                        loans.map((product, index) => (
                            <div key={index} className={styles.productCard}>
                                <table className={styles.productTable}>
                                    <thead className={styles.tableHeader}>
                                        <tr>
                                            <td className={styles.title}>
                                                {locale === 'zh' ? product.asset : product.asset_en}
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
                                                {t('status')} <span className={styles.value}>{t(product.status)}</span>             
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={styles.productDescription} style={{ padding: '0px 8px'}}>{locale === 'zh' ? product.description : product.description_en}</div>
                            </div>
                        ))
                    }
                    {loans.length % 3 === 1 && (
                        <>
                            <div className={styles.invisiable}></div>
                            <div className={styles.invisiable}></div>
                        </>
                    )}
                    {loans.length % 3 === 2 && (
                        <div className={styles.invisiable}></div>
                    )}
                </div>
                <h2 className={styles.productListTitle}>{t('hedging')}</h2>
                <div className={styles.productList}>
                    <span>COMING SOON</span>
                </div>
            </div>
        )
    );
};

export default Investment;
