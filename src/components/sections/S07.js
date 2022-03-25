import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { RiCloseLine } from 'react-icons/ri';

import styles from './S07.module.scss';
import 'swiper/css';
import 'swiper/scss/pagination';
import Model from '../models/S07_swiperModel';
import BorderLink from '../shared/BorderLink';

import slide01 from '../../assets/images/s07/image01.png';
import slide02 from '../../assets/images/s07/image02.png';
import slide03 from '../../assets/images/s07/image03.png';
import slide04 from '../../assets/images/s07/image04.png';
import slide05 from '../../assets/images/s07/image05.png';
import slide06 from '../../assets/images/s07/image06.png';
import slide07 from '../../assets/images/s07/image07.png';
import slide08 from '../../assets/images/s07/image08.png';
import slide09 from '../../assets/images/s07/image09.png';
import slide10 from '../../assets/images/s07/image10.png';

const cx = classNames.bind(styles);
SwiperCore.use([Autoplay]);

const S07 = ({ setTop }) => {
  const sectionRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s07: sectionRef.current.offsetTop,
    }));
  }, []);

  const datas = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
    slide08,
    slide09,
    slide10,
  ];

  const handleZoomImage = event => {
    setImageSrc(event.target.currentSrc);
  };

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>COMMUNITY</h2>
        <p>
          Create universe &amp; Enjoy omniverse
          <br />
          User Centered &amp; Participatory
        </p>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ el: '.paginationBox', clickable: true, bulletActiveClass: cx('active') }}
        className={cx('swiper')}
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          740: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 2500 }}
      >
        {datas.map((image, index) => (
          <SwiperSlide className={cx('slide')} key={index} onClick={handleZoomImage}>
            <Model image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cx(['pagination', 'paginationBox'])} />
      <BorderLink title={'More View'} link={false} />
      {imageSrc === null || imageSrc === undefined ? (
        false
      ) : (
        <div className={cx('modal')}>
          <p className={cx('hidden')} onClick={() => setImageSrc(null)}>
            <RiCloseLine />
          </p>
          <img src={imageSrc} alt="" />
        </div>
      )}
      <div className={cx('background')} />
    </div>
  );
};

export default S07;
