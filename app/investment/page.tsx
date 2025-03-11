'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 

interface Product {
    name: string;
    source: string;
    apr: number;
    drawdown: number;
    currency: string;
    strategy: string;
    sub_status: string;
    description: string;
}

const Investment: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
                                    <td className={styles.title}>{product.name}</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                <tr>
                                    <td className={styles.subtitle} style={{ padding: '2px 8px'}}>{product.source}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ height: '10px', backgroundColor: 'transparent' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        APR <span className={styles.value } style={{color: 'green'}}>{product.apr}%</span>
                                    </td>
                                    <td>
                                        Max drawdown <span className={styles.value } style={{color: 'red'}}>{product.drawdown}%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        Currency <span className={styles.value }>{product.currency}</span>
                                    </td>
                                    <td>
                                        Strategy <span className={styles.value }>{product.strategy}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 8px'}}>
                                        Status <span className={styles.value }>{product.sub_status}</span>
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
