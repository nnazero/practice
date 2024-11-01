import React, { useState } from 'react';  // useState 추가
import KakaoMap from '../../components/KakaoMap';
import styles from '../../styles/company/CompanySearch.module.css';
import searchIcon from '../../assets/images/company-search.svg';
import searchBack from '../../assets/images/company-back.svg'
import searchLine from '../../assets/images/company-searchline.svg'

function CompanySearch() {
    const [isSearchModal, setIsSearchModal] = useState(false);

    const openSearchModal = () => {
        console.log('Modal open function called'); // 콘솔에서 이 메시지가 출력되는지 확인
        setIsSearchModal(true);
    };

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
                        <button className={styles.back} onClick={() => setIsSearchModal(false)}>
                            <img src={searchBack} alt="search back" className={styles.searchBack} />
                        </button>
                    </div>
                    <img src={searchLine} alt="search line" className={styles.searchLine} />
                    <div className={styles.searchCategory}>
                        <button className={styles.searchCategoryBtn}>최근검색</button>
                        <button className={styles.searchCategoryBtn}>내장소</button>
                        <button className={styles.searchCategoryBtn}>즐겨찾기</button>
                    </div>
                    <img src={searchLine} alt="search line" className={styles.searchLine} />
                </div>
            )}
        </div>
    );
}


export default CompanySearch;
