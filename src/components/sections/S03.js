import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import styles from "./S03.module.scss";
import "swiper/css";
import Model from "../../components/models/S03_swiperModel";
import BorderLink from "../shared/BorderLink";

import slide01 from "../../assets/images/s03/slide01.png";
import slide02 from "../../assets/images/s03/slide02.png";
import slide03 from "../../assets/images/s03/slide03.png";
import slide04 from "../../assets/images/s03/slide04.png";
import slide05 from "../../assets/images/s03/slide05.png";
import slide06 from "../../assets/images/s03/slide06.png";

const cx = classNames.bind(styles);
SwiperCore.use([Navigation, Autoplay]);

const S03 = () => {
  const data = [
    {
      color: "#BA9DAA",
      image: slide01,
    },
    {
      color: "#9FBBA3",
      image: slide02,
    },
    {
      color: "#AB9BBA",
      image: slide03,
    },
    {
      color: "#B9AB9E",
      image: slide04,
    },
    {
      color: "#A6BA9E",
      image: slide05,
    },
    {
      color: "#A39EBA",
      image: slide06,
    },
  ];

  return (
    <div className={cx("section")}>
      <div className={cx("limiter")}>
        <h2>UNIVERSE NFT</h2>
        <p>
          Each KLAY UNIVERSE NFT is an explorable, <br />
          limitless world that can be built into anything you can imagine.
        </p>
      </div>
      <Swiper
        className={cx("swiper")}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
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
        {data.map(({ color, image }, index) => (
          <SwiperSlide className={cx("slide")} key={index}>
            <Model color={color} image={image} number={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <BorderLink title={"Buy on Opensea"} link={""} />
      <div className={cx(["btn", "prev", "prevBtn"])} />
      <div className={cx(["btn", "next", "nextBtn"])} />
      <div className={cx("background")} />
    </div>
  );
};

export default S03;