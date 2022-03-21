import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '../../assets/images/shared/klayuniverse_white_logo.png';

const cx = classNames.bind(styles);

const Header = ({ scrollTops }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menus = ['PROMO', 'UNIVERSE', 'ROADMAP', 'TEAM', 'PARTNERS', 'COMMUNITY'];

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

  return (
    <header>
      <div className={cx('limiter')}>
        <h1 onClick={() => scrollToTop(0)}>
          <img src={logo} alt="klay universe" />
        </h1>
        <ul>
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
    </header>
  );
};

export default Header;
