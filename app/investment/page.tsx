'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 

const Investment: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/investment_data')
          .then((response) => response.json())
          .then((data) => setProducts(data));
    }, []);

    console.log(products);
    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
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
                                    Strategy <span className={styles.value }>{product.strategy}</span>
                                </td>
                                <td>
                                    Sub Status <span className={styles.value }>{product.sub_status}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.productDescription } style={{ padding: '0px 8px'}}>{product.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Investment;
