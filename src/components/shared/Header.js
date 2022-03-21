import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '../../assets/images/shared/klayuniverse_white_logo.png';

const cx = classNames.bind(styles);

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menus = ['PROMO', 'UNIVERSE', 'ROADMAP', 'TEAM', 'PARTNERS', 'COMMUNITY'];

  return (
    <header>
      <div className={cx('limiter')}>
        <h1>
          <img src={logo} alt="klay universe" />
        </h1>
        <ul>
          {menus.map((menu, index) => (
            <li
              onClick={() => setActiveIndex(index)}
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
