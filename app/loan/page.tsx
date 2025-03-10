import React from 'react';
import styles from '../styles/Body.module.css'; 

const LoanPage: React.FC = () => {
    const products = [
        {
            asset: 'BTC抵押借贷U',
            source: 'From VV(Spider)',
            supplyAmount: '30M',
            interestRate: '9%',
            mortgageRate: '60%',
            status: 'Ongoing',
            description: '只接受比特币做抵押物。额度有时限。已借出5M。',
        },
        {
            asset: '矿机抵押借贷U',
            source: 'From VV(Spider)',
            supplyAmount: "5M",
            interestRate: '15%',
            mortgageRate: '70%',
            status: 'Ongoing',
            description: '接受矿机做抵押物，需要担保。',
        }
    ]

    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
                <div key={index} className={styles.productCard}>
                    <table className={styles.productTable}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <td>{product.asset}</td>
                                <td>{product.source}</td>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            <tr>
                                <td colSpan={2} style={{ height: '10px', backgroundColor: 'transparent' }}></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.subtitle}>Interest: </span> 
                                    {product.interestRate}
                                </td>
                                <td>
                                    <span className={styles.subtitle}>Mortgage: </span>
                                    {product.mortgageRate}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.subtitle}>Amount: </span> 
                                    {product.supplyAmount}
                                </td>
                                <td>
                                    <span className={styles.subtitle}>Status: </span>
                                    {product.status}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.productDescription}>{product.description}</div>
                </div>
            ))}
        </div>
    );
};

export default LoanPage;
