import classNames from 'classnames/bind';

import styles from './S03_swiperModel.module.scss';

const cx = classNames.bind(styles);

const S03_model = ({ video, number }) => {
  return (
    <div className={cx('box')}>
      <div className={cx('image')}>
        <video autoPlay muted loop className={cx('video')}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={cx('info')}>
        <p>
          UNIVERSE <span>0{number + 1}</span>
        </p>
      </div>
    </div>
  );
};

export default S03_model;
