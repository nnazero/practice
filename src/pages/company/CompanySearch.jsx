import React from 'react';
import KakaoMap from '../../components/KakaoMap';
import styles from '../../styles/company/CompanySearch.module.css';
import searchIcon from '../../assets/images/company-search.svg'

function CompanySearch() {
    return (
     <div className={styles.container}>
        <div className={styles.topBar}>
            <p className={styles.pageName}>기업 찾기</p>
            <button className={styles.searchBtn}>
                <img src={searchIcon} alt={`searchIcon`} className={styles.searchIcon} />
            </button>
        </div>
        <div className={styles.map}>
            <KakaoMap />
        </div>
     </div>
    );
   }
   
   export default CompanySearch;