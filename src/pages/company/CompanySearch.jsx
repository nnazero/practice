import React, { useState, useEffect } from 'react';
import KakaoMap from '../../components/KakaoMap';
import styles from '../../styles/company/CompanySearch.module.css';
import searchIcon from '../../assets/images/company-search.svg';
import searchBack from '../../assets/images/company-back.svg';
import searchLine from '../../assets/images/company-searchline.svg';
import searchDelete from '../../assets/images/company-searchdelete.svg';

function CompanySearch() {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]); // 올바른 상태 업데이트 함수명 사용
    const [activeSearchCategory, setActiveSearchCategory] = useState('');
    const [isDetailModal, setIsDetailModal] = useState(false);

    const openSearchModal = () => {
        console.log('Modal open');
        setIsSearchModal(true);
    };

    const closeSearchModal = () => {
        console.log('Modal close');
        setIsSearchModal(false);
        setActiveSearchCategory ('');
    };

    const openDetailModal = () => {
        console.log('Modal open');
        setIsDetailModal(true);
    };

    const closeDetailModal = () => {
        console.log('Modal close');
        setIsDetailModal(false);
    };

    const categoryClick = (category) => {
        setActiveSearchCategory(category);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dummyData/companySearchData.json');
                const data = await response.json();
                setSearchHistory(data); // 올바른 상태 업데이트 함수명 사용
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <p className={styles.pageName}>기업 찾기</p>
                <button className={styles.searchBtn} onClick={openSearchModal}>
                    <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
                </button>
            </div>
            <div className={styles.map}>
                <KakaoMap />
            </div>

            {isSearchModal && (
                <div className={styles.searchModalContainer}>
                    <div className={styles.searchModalHeader}>
                        <button className={styles.back} onClick={closeSearchModal}>
                            <img src={searchBack} alt="search back" className={styles.searchBack} />
                        </button>
                    </div>
                    <img src={searchLine} alt="search line" className={styles.searchLine} />
                    <div className={styles.searchCategory}>
                        <button className={styles.searchCategoryBtn} onClick={() => categoryClick('최근검색')}>최근검색</button>
                        <button className={styles.searchCategoryBtn} onClick={() => categoryClick('내장소')}>내장소</button>
                        <button className={styles.searchCategoryBtn} onClick={() => categoryClick('즐겨찾기')}>즐겨찾기</button>
                    </div>
                    <img src={searchLine} alt="search line" className={styles.searchLine} />
                    {activeSearchCategory === '최근검색' && (
                        searchHistory && searchHistory.length > 0 ? (
                            searchHistory.map((history, index) => (
                                <div key={history.searchId} className={styles.searchHistory}>
                                    <p className={styles.query}>{history.query}</p>
                                    <p className={styles.searchTime}>{history.searchTime}</p>
                                    <button className={styles.delete}>
                                        <img src={searchDelete} alt="search delete" className={styles.searchDelete} />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No subscriptions found.</p>
                        )
                    )}
                </div>
            )}
            {isDetailModal && (
                <div className={styles.detailModalContainer}>
                    {/* Modal Content Here */}
                </div>
            )}
        </div>
    );
}

export default CompanySearch;
