import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './S06.module.scss';

const cx = classNames.bind(styles);

const S06 = ({ setTop }) => {
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
        <p>
          Klay Universe is with creative and outstanding partners to expand its broader worldview.
        </p>
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
