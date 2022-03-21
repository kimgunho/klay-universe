import classNames from 'classnames/bind';

import styles from './S07_swiperModel.module.scss';

const cx = classNames.bind(styles);

const S07_model = ({ image }) => {
  return (
    <div className={cx('box')}>
      <img src={image} alt="" />
    </div>
  );
};

export default S07_model;
