"use client"

import React, { useEffect, useState } from 'react';
import styles from '../styles/Table.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { Locale } from '../../i18n/config';

interface Chinesestock {
    name: string;
    code: string;
    code_hk: string;
    comment: string;
    Rate: number;
    type: string;
}

const Investment: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const [chinesestocks, setChinesestocks] = useState<Chinesestock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const locale = useLocale() as Locale;
    const t = useTranslations();

    useEffect(() => {
        fetch('/api/chinesestock_data')
          .then((response) => response.json())
          .then((data) => {
              setChinesestocks(data);
              console.log(data);
              setLoading(false);
          });
    }, []);

    const renderList = () => {
        let filteredStocks = chinesestocks;

        switch (activeTab) {
            case 'tech giants':
                filteredStocks = chinesestocks.filter(stock => stock.type === 'techgiant');
                break;
            case 'EVs and eVtols':
                filteredStocks = chinesestocks.filter(stock => stock.type === 'evevtol');
                break;
            case 'state giants':
                filteredStocks = chinesestocks.filter(stock => stock.type === 'stategiant');
                break;
            default:
                break;
        }

        return (
            <table className={styles.stockTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>USCode</th>
                        <th>HKCode</th>
                        <th>Rate</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStocks.map(stock => (
                        <tr key={stock.name}>
                            <td>{stock.name}</td>
                            <td>{stock.code}</td>
                            <td>{stock.code_hk}</td>
                            <td>{stock.Rate}</td>
                            <td>{stock.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const renderDescription = () => {
        switch (activeTab) {
            case 'tech giants':
                return "China's leading Internet companies are the country's highest-quality assets, concentrating the most resources, dominating daily life, and expanding overseas. Many companies possess natural monopolies.";
            case 'EVs and eVtols':
                return "The representative of China's new quality productive forces is a new growth pole following the Internet, and it is highly competitive in the global market. The only downside is the intense competition.";
            case 'state giants':
                return "Stable state-owned assets with low valuations and stable dividends. For many companies, dividends over the past 10 to 20 years have already recouped the initial investment. Many companies possess monopolistic characteristics.";
            default:
                return "These are carefully selected stocks, focusing on fundamental and value investing. Companies that are not worth paying attention to won't even appear on this list, so even a rate 1 company represents that I think it's still decent. The data will be adjusted and updated in a timely manner.";
        }
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loading}>LOADING...</div>
            ) : (
                <div>
                    <div className={styles.tabContainer}>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'all' ? styles.active : ''}`} 
                            onClick={() => setActiveTab('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'tech giants' ? styles.active : ''}`} 
                            onClick={() => setActiveTab('tech giants')}
                        >
                            Tech Giant
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'EVs and eVtols' ? styles.active : ''}`} 
                            onClick={() => setActiveTab('EVs and eVtols')}
                        >
                            EV/eVTOL
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'state giants' ? styles.active : ''}`} 
                            onClick={() => setActiveTab('state giants')}
                        >
                            State Giant
                        </button>
                    </div>
                    <p className={styles.description}>
                        {renderDescription()}
                    </p>
                    <div>
                        {renderList()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Investment;
