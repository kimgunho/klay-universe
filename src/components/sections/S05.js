import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useTranslation } from 'react-i18next';

import styles from './S05.module.scss';
import 'swiper/css';
import Model from '../models/S05_swiperModel';

import team01 from '../../assets/images/s05/team01.jpg';
import team02 from '../../assets/images/s05/team02.jpg';
import team03 from '../../assets/images/s05/team03.jpg';
import team04 from '../../assets/images/s05/team04.jpg';
import team05 from '../../assets/images/s05/team05.jpg';
import team06 from '../../assets/images/s05/team06.jpg';
import team07 from '../../assets/images/s05/team07.jpg';
import team08 from '../../assets/images/s05/team08.jpg';
import team09 from '../../assets/images/s05/team09.jpg';
import team10 from '../../assets/images/s05/team10.jpg';
import team11 from '../../assets/images/s05/team11.jpg';
import team12 from '../../assets/images/s05/team12.jpg';
import team13 from '../../assets/images/s05/team13.jpg';
import team14 from '../../assets/images/s05/team14.jpg';
import team15 from '../../assets/images/s05/team15.jpg';
import team16 from '../../assets/images/s05/team16.jpg';
import team17 from '../../assets/images/s05/team17.jpg';
import team18 from '../../assets/images/s05/team18.jpg';
import team19 from '../../assets/images/s05/team19.jpg';
// import icon from '../../assets/images/s05/slide_icon.svg';

const cx = classNames.bind(styles);
SwiperCore.use([Autoplay]);

const S05 = ({ setTop }) => {
  const { t } = useTranslation();
  const sectionRef = useRef();

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s05: sectionRef.current.offsetTop,
    }));
  }, []);

  const team = [
    {
      name: 'James. Choi',
      position: 'Project PD',
      image: team01,
    },
    {
      name: 'Hyun. Choi',
      position: 'Development',
      image: team02,
    },
    {
      name: 'Rowan Lee',
      position: 'Development',
      image: team03,
    },
    {
      name: 'Brent Park',
      position: 'Development',
      image: team04,
    },
    {
      name: 'Ho Ryu',
      position: 'Design',
      image: team05,
    },
    {
      name: 'Kale Lim',
      position: 'Operation',
      image: team06,
    },
    {
      name: 'Leo K',
      position: 'Operation',
      image: team07,
    },
    {
      name: 'Yuria Kim',
      position: 'Marketing',
      image: team08,
    },
    {
      name: 'Ru Kong',
      position: 'Marketing',
      image: team09,
    },
    {
      name: 'Denny Yan',
      position: 'Community',
      image: team10,
    },
    {
      name: 'Jay choi',
      position: 'Community',
      image: team11,
    },
    {
      name: 'Silvia Lim',
      position: 'External Cooperation',
      image: team12,
    },
    {
      name: '?',
      position: 'Global manager',
      image: team13,
    },
    {
      name: 'Lorenzo S',
      position: 'Adviosor',
      image: team14,
    },
    {
      name: 'KC K',
      position: 'Adviosor',
      image: team15,
    },
    {
      name: '?',
      position: 'Builder',
      image: team16,
    },
    {
      name: '?',
      position: 'Builder',
      image: team17,
    },
    {
      name: '?',
      position: 'Creator',
      image: team18,
    },
    {
      name: '?',
      position: 'CreatorB',
      image: team19,
    },
  ];

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>TEAM</h2>
        <p>
          {t('s05.desc')
            .split('\n')
            .map((_, index) => (
              <span key={index}>{_}</span>
            ))}
        </p>
      </div>

      <Swiper
        className={cx('swiper')}
        spaceBetween={30}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          740: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 6.5,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 2500 }}
      >
        {team.map(({ name, position, image }, index) => (
          <SwiperSlide className={cx('slide')} key={index}>
            <Model name={name} position={position} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className={cx('autoSwiper')}>
        {Array.from(Array(20)).map((_, index) => (
          <div key={index} className={cx('slide')}>
            <p>Indulge in what you imagine </p>
            <img src={icon} alt="" />
          </div>
        ))}
      </div> */}
      <div className={cx('background')} />
    </div>
  );
};

export default S05;
