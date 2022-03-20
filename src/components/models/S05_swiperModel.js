import classNames from "classnames/bind";

import styles from "./S05_swiperModel.module.scss";

const cx = classNames.bind(styles);

const S05_model = ({ name, position, image }) => {
  return (
    <div className={cx("box")}>
      <img src={image} alt="" />
      <div className={cx("info")}>
        <p>
          {name}
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
};

export default S05_model;
