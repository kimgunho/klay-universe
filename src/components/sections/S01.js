import classNames from "classnames/bind";

import styles from "./S01.module.scss";

import mouse_icon from "../../assets/images/s01/mouse_icon.svg";

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("title")}>
        <h2>
          5,000 Metaverse Worlds,
          <br />
          <span>On Klaytn Blockchain.</span>
        </h2>
        <a href="">Join Discord</a>
      </div>

      <p className={cx("mouse")}>
        <img src={mouse_icon} alt="" />
        SCROLL
      </p>
    </div>
  );
};

export default S01;
