import classNames from "classnames/bind";

import styles from "./S02.module.scss";

import video from "../../assets/videos/section.mp4";

const cx = classNames.bind(styles);

const S02 = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("limiter")}>
        <h2>PROMO VIDEO</h2>
        <video controls loop className={cx("video")}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={cx("background")} />
    </div>
  );
};

export default S02;
