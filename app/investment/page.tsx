import React from 'react';
import styles from '../styles/Body.module.css'; 

const Investment: React.FC = () => {
    const products = [
        {
            name: 'QuantMesh AI策略',
            source: '已实盘验证8个月(Lee)',
            apr: '64.2%',
            drawdown: '3.32%',
            description: '市场快速下跌时买入，反弹后快速卖出。赚取市场情绪的收益。通过AI决策具体的买卖和止损点。',
        },
        {
            name: 'Jupiter做市+对冲',
            source: '实盘验证中(Lee)',
            apr: '47.2%',
            drawdown: '2%',
            description: 'Jupiter为solana最大defi协议。此策略在Jupiter的perps做市，并对冲池子资金的币种风险和头寸风险。市场中性策略。',
        },
        {
            name: 'B***b',
            source: "From L2Y Research",
            apr: '34.12%',
            drawdown: '6%',
            description: 'U本位策略。产品稳定运行5年。2020-2023年平均年收益20%。',
        },
    ];

    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
                <div key={index} className={styles.productCard}>
                    <table className={styles.productTable}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.source}</td>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            <tr>
                                <td colSpan={2} style={{ height: '10px', backgroundColor: 'transparent' }}></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.subtitle}>APR: </span> 
                                    {product.apr}
                                </td>
                                <td>
                                    <span className={styles.subtitle}>Max drawdown: </span>
                                    {product.drawdown}
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

export default Investment;
