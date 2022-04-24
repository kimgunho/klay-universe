import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S06.module.scss';

const cx = classNames.bind(styles);

const S06 = ({ setTop }) => {
  const { t } = useTranslation();
  const sectionRef = useRef();

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s06: sectionRef.current.offsetTop,
    }));
  }, []);

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>PARTNERS</h2>
        <p>{t('s06.desc')}</p>
        <ul className={cx('list')}>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
      <div className={cx('background')} />
    </div>
  );
};

export default S06;
