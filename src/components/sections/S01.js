import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { UseUserModal } from '../../context/modalContext';

import styles from './S01.module.scss';
import BorderLink from '../shared/BorderLink';

import mouse_icon from '../../assets/images/s01/mouse_icon.svg';
import intro_video from '../../assets/videos/section.mp4';

const cx = classNames.bind(styles);

const S01 = ({ setTop }) => {
  const { setModalActive } = UseUserModal();
  const sectionRef = useRef();

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s01: sectionRef.current.offsetTop,
    }));
  }, []);

  const onClick = event => {
    event.preventDefault();
    setModalActive(true);
  };

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('wallet')}>
        <a href="" onClick={onClick} target={'_blank'} rel="noreferrer">
          <p>Connect Wallet</p>
          <div className={cx('background')}>
            <div className={cx('icon')} />
          </div>
        </a>
      </div>
      <div className={cx('dimmed')} />
      <video autoPlay muted loop className={cx('video')}>
        <source src={intro_video} type="video/mp4" />
      </video>
      <div className={cx('title')}>
        <h2>
          5,000 Metaverse Worlds,
          <br />
          <span>On Klaytn Blockchain.</span>
        </h2>

        <BorderLink title="Join Discord" link={'https://discord.com/invite/fveVY8YMhX'} />
      </div>

      <p className={cx('mouse')}>
        <img src={mouse_icon} alt="" />
        SCROLL
      </p>
    </div>
  );
};

export default S01;
