import { useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import logo from '../../assets/images/shared/klayuniverse_white_logo.png';

const cx = classNames.bind(styles);

const Header = ({ scrollTops }) => {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const menus = ['PROMO', 'UNIVERSE', 'ROADMAP', 'TEAM', 'PARTNERS', 'GALLERY'];

  const onClick = (index, section) => {
    setActiveIndex(index);
    scrollToTop(scrollTops[section]);
  };

  const scrollToTop = section => {
    window.scrollTo({
      top: section,
      behavior: 'smooth',
    });
  };

  const handleChangeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <div className={cx('limiter')}>
        <h1 onClick={() => scrollToTop(0)}>
          <img src={logo} alt="klay universe" />
        </h1>
        <div className={cx('nav')}>
          <ul className={cx('tnb')}>
            <li
              onClick={() => handleChangeLanguage('en')}
              className={cx({ active: i18n.language === 'en' })}
            >
              EN
            </li>
            <li
              onClick={() => handleChangeLanguage('ko')}
              className={cx({ active: i18n.language === 'ko' })}
            >
              KR
            </li>
          </ul>
          <ul className={cx('gnb')}>
            {menus.map((menu, index) => (
              <li
                onClick={() => onClick(index, `s0${index + 2}`)}
                key={index}
                className={cx({ active: index === activeIndex })}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
