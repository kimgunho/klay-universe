import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useTranslation } from 'react-i18next';

import styles from './S03.module.scss';
import 'swiper/css';
import Model from '../../components/models/S03_swiperModel';
import BorderLink from '../shared/BorderLink';

import slide01 from '../../assets/videos/s03_01.mp4';
import slide02 from '../../assets/videos/s03_02.mp4';
import slide03 from '../../assets/videos/s03_03.mp4';
import slide04 from '../../assets/videos/s03_04.mp4';
import slide05 from '../../assets/videos/s03_05.mp4';
import slide06 from '../../assets/videos/s03_06.mp4';

const cx = classNames.bind(styles);
SwiperCore.use([Autoplay]);

const S03 = ({ setTop }) => {
  const { t } = useTranslation();
  const sectionRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s03: sectionRef.current.offsetTop,
    }));
  }, []);

  useEffect(() => {
    changeWindowWidth();
    window.addEventListener('resize', changeWindowWidth);
  }, []);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const datas = [
    {
      video: slide01,
    },
    {
      video: slide02,
    },
    {
      video: slide03,
    },
    {
      video: slide04,
    },
    {
      video: slide05,
    },
    {
      video: slide06,
    },
  ];

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>UNIVERSE NFT</h2>
        <p>
          {t('s03.desc')
            .split('\n')
            .map((_, index) => (
              <span key={index}>{_}</span>
            ))}
        </p>
      </div>
      {windowWidth > 940 ? (
        <Swiper
          className={cx('swiper')}
          spaceBetween={30}
          loop={true}
          slidesPerView={1.5}
          breakpoints={{
            740: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          autoplay={{ delay: 2500 }}
        >
          {datas.map(({ video }, index) => (
            <SwiperSlide className={cx('slide')} key={index}>
              <Model video={video} number={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={cx('flex')}>
          {datas.map(({ video }, index) => (
            <SwiperSlide className={cx('slide')} key={index}>
              <Model video={video} number={index} />
            </SwiperSlide>
          ))}
        </ul>
      )}

      <BorderLink title={'Buy on Opensea'} link={false} />
      <div className={cx('background')} />
    </div>
  );
};

export default S03;
