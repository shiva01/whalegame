'use client'

import React, { useEffect, useState} from 'react';
import styles from '../styles/Body.module.css'; 

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

    useEffect(() => {
        fetch('/api/loan_data')
          .then((response) => response.json())
          .then((data) => setProducts(data));
    }, []);

    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
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
                                <td className={styles.subtitle} style={{ padding: '2px 8px'}}>{product.source}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ height: '10px', backgroundColor: 'transparent' }}></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0px 8px'}}>
                                    Interest <span className={styles.value} style={{ color: 'green'}}>{product.interest_rate}%</span> 
                                </td>
                                <td>
                                    Mortgage <span className={styles.value} style={{ color: 'red'}}>{product.mortgage_rate}%</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0px 8px'}}>
                                    Amount <span className={styles.value}>{product.supply_amount}</span> 
                                </td>
                                <td>
                                    Status <span className={styles.value}>{product.status}</span>             
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.productDescription} style={{ padding: '0px 8px'}}>{product.description}</div>
                </div>
            ))}
        </div>
    );
};

export default LoanPage;
