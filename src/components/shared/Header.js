import { useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { UseUserModal } from '../../context/modalContext';

import styles from './Header.module.scss';
import logo from '../../assets/images/shared/klayuniverse_white_logo.png';

const cx = classNames.bind(styles);

const Header = ({ scrollTops }) => {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { setModalActive } = UseUserModal();

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

  const handlePageLocation = event => {
    event.preventDefault();
    setModalActive(true);
  };

  return (
    <>
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
      <aside>
        <ul>
          <li className={cx('wallet')}>
            <a onClick={handlePageLocation} href="" target={'_blank'} rel="noreferrer">
              <p>Connect Wallet</p>
              <div className={cx('background')}>
                <div className={cx('icon')} />
              </div>
            </a>
          </li>
          <li className={cx('book')}>
            <a
              href="https://klayuniverse.gitbook.io/whitepaper/welcome-to-klay-universe/create-your-own-universe"
              target={'_blank'}
              rel="noreferrer"
            >
              <p>Connect Whitepaper</p>
              <div className={cx('background')}>
                <div className={cx('icon')} />
              </div>
            </a>
          </li>
          <li className={cx('search')}>
            <a onClick={handlePageLocation} href="" target={'_blank'} rel="noreferrer">
              <p>UNIVERSE Search</p>
              <div className={cx('background')}>
                <div className={cx('icon')} />
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
