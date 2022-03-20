import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import styles from "./S07.module.scss";
import "swiper/css";
import Model from "../models/S07_swiperModel";
import BorderLink from "../shared/BorderLink";

import slide01 from "../../assets/images/s07/image01.png";
import slide02 from "../../assets/images/s07/image02.png";
import slide03 from "../../assets/images/s07/image03.png";
import slide04 from "../../assets/images/s07/image04.png";
import slide05 from "../../assets/images/s07/image05.png";
import slide06 from "../../assets/images/s07/image06.png";
import slide07 from "../../assets/images/s07/image07.png";
import slide08 from "../../assets/images/s07/image08.png";
import slide09 from "../../assets/images/s07/image09.png";
import slide10 from "../../assets/images/s07/image10.png";

const cx = classNames.bind(styles);
SwiperCore.use([Navigation, Autoplay]);

const S07 = () => {
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

  const onClick = (e) => {
    const image = e.target;
    image.classList.add(cx("view"));
  };

  return (
    <div className={cx("section")}>
      <div className={cx("limiter")}>
        <h2>COMMUNITY</h2>
        <p>
          Create universe &amp; Enjoy omniverse
          <br />
          User Centered &amp; Participatory
        </p>
      </div>
      <Swiper
        className={cx("swiper")}
        spaceBetween={30}
        loop={true}
        // navigation={{
        //   nextEl: ".nextBtn",
        //   prevEl: ".prevBtn",
        // }}
        zoom={true}
        slidesPerView={1.5}
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
          <SwiperSlide className={cx("slide")} key={index} onClick={onClick}>
            <Model image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <BorderLink title={"More View"} link={""} />
      {/* <div className={cx(["btn", "prev", "prevBtn"])} />
      <div className={cx(["btn", "next", "nextBtn"])} /> */}
      <div className={cx("background")} />
    </div>
  );
};

export default S07;
