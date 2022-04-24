import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useTranslation } from 'react-i18next';

import styles from './S03.module.scss';
import 'swiper/css';
import Model from '../../components/models/S03_swiperModel';
import BorderLink from '../shared/BorderLink';

import slide01 from '../../assets/images/s03/slide01.png';
import slide02 from '../../assets/images/s03/slide02.png';
import slide03 from '../../assets/images/s03/slide03.png';
import slide04 from '../../assets/images/s03/slide04.png';
import slide05 from '../../assets/images/s03/slide05.png';
import slide06 from '../../assets/images/s03/slide06.png';

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
      color: '#BA9DAA',
      image: slide01,
    },
    {
      color: '#9FBBA3',
      image: slide02,
    },
    {
      color: '#AB9BBA',
      image: slide03,
    },
    {
      color: '#B9AB9E',
      image: slide04,
    },
    {
      color: '#A6BA9E',
      image: slide05,
    },
    {
      color: '#A39EBA',
      image: slide06,
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
          {datas.map(({ color, image }, index) => (
            <SwiperSlide className={cx('slide')} key={index}>
              <Model color={color} image={image} number={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={cx('flex')}>
          {datas.map(({ color, image }, index) => (
            <SwiperSlide className={cx('slide')} key={index}>
              <Model color={color} image={image} number={index} />
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
