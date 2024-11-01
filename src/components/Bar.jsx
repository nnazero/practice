import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가
import styles from '../styles/components/bar.module.css';
import on1 from '../assets/images/bar/on1.svg';
import on2 from '../assets/images/bar/on2.svg';
import on3 from '../assets/images/bar/on3.svg';
import off1 from '../assets/images/bar/off1.svg';
import off2 from '../assets/images/bar/off2.svg';
import off3 from '../assets/images/bar/off3.svg';

const Bar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  // 각 버튼 클릭 시 해당 경로로 이동
  /*const handleProfileClick = () => {
    navigate('/HomePage');
  };

  const handleCalendarClick = () => {
    navigate('/calendar');
  };

  const handleQuestionClick = () => {
    navigate('/recommend');
  };
*/
  return (
    <div className={styles.Bar}>
      <button className={styles.profile} onClick={handleProfileClick}>
        <img
          src={location.pathname === '/HomePage' ? on1 : off1}  // 현재 경로에 따라 on/off 이미지 설정
          alt="Profile Button"
          className={styles.profBtn}
        />
      </button>
      <button className={styles.calendar} onClick={handleCalendarClick}>
        <img
          src={location.pathname === '/calendar' ? on2 : off2}  // 현재 경로에 따라 on/off 이미지 설정
          alt="Calendar Button"
          className={styles.calBtn}
        />
      </button>
      <button className={styles.question} onClick={handleQuestionClick}>
        <img
          src={location.pathname === '/recommend' ? on3 : off3}  // 현재 경로에 따라 on/off 이미지 설정
          alt="Question Button"
          className={styles.qBtn}
        />
      </button>
    </div>
  );
};

export default Bar;
