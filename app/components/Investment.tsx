import React from 'react';
import styles from './Investment.module.css'; // 引入样式

const Investment: React.FC = () => {
    const products = [
        {
            name: 'QuantMesh AI策略',
            apr: '64.2%',
            drawdown: '3.32%',
            description: '市场快速下跌时买入，反弹后快速卖出。赚取市场情绪的收益。通过AI决策具体的买卖和止损点。',
            reliability: '已实盘验证8个月(Lee)',
        },
        {
            name: 'Jupiter做市+对冲',
            apr: '40%+',
            drawdown: '2%',
            description: 'Jupiter为solana最大defi协议。此策略在Jupiter的perps做市，并对冲池子资金的币种风险和头寸风险。市场中性策略。',
            reliability: '实盘验证中(Lee)',
        },
        {
            name: 'B***b',
            apr: '34.12%',
            drawdown: '6%',
            description: 'U本位策略。产品稳定运行4年。',
            reliability: "From L2Y Research"
        },
    ];

    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
                <div key={index} className={styles.productItem}>
                    <div className={styles.productHeader}>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.productApr}>
                            <span className={styles.subtitle}>APR </span> 
                            {product.apr}
                        </span>
                        <span className={styles.productDrawdown}>
                            <span className={styles.subtitle}>Max drawdown </span>
                            {product.drawdown}
                        </span>
                        <span className={styles.reliability}>{product.reliability}</span>
                    </div>
                    <div className={styles.productDescription}>{product.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Investment;
