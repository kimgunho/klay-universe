import classNames from "classnames/bind";

import styles from "./S01.module.scss";

import mouse_icon from "../../assets/images/s01/mouse_icon.svg";
import intro_video from "../../assets/videos/KlayUniverse_Promo.mp4";

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("wallet")}>
        <a href="http://naver.com" target={"_blank"} rel="noreferrer">
          <p>Connect Wallet</p>
          <div className={cx("background")}>
            <div className={cx("icon")} />
          </div>
        </a>
      </div>
      <div className={cx("dimmed")} />
      <video autoPlay muted loop className={cx("video")}>
        <source src={intro_video} type="video/mp4" />
      </video>
      <div className={cx("title")}>
        <h2>
          5,000 Metaverse Worlds,
          <br />
          <span>On Klaytn Blockchain.</span>
        </h2>
        <a
          href="https://discord.com/invite/fveVY8YMhX"
          target={"_blank"}
          rel="noreferrer"
        >
          Join Discord
        </a>
      </div>

      <p className={cx("mouse")}>
        <img src={mouse_icon} alt="" />
        SCROLL
      </p>
    </div>
  );
};

export default S01;
