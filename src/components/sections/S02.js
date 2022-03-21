import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import video from '../../assets/videos/KlayUniverse_Promo.mp4';

const cx = classNames.bind(styles);

const S02 = ({ setTop }) => {
  const sectionRef = useRef();

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s02: sectionRef.current.offsetTop,
    }));
  }, []);

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>PROMO VIDEO</h2>
        <video autoPlay muted loop className={cx('video')}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={cx('background')} />
    </div>
  );
};

export default S02;
