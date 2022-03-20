import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./S04.module.scss";

import Q2_image from "../../assets/images/s04/q2_image.png";

const cx = classNames.bind(styles);

const S04 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const datas = [
    {
      head: "Q2",
      data: [
        "Minecraft supported",
        "All 5,000 UNIVERSE minted",
        "UNIVERSE rarity & distribution data separation completed",
        "UNIVERSE syncing to update UNIVERSE on the blockchain",
        "Open sourcemultiplayer server released",
        "Cross-platform playable (Xbox, PS, Switch, Phones, Tablets)",
        "COMMUNITY build-up",
        "Compensation plans for UNIVERSE holders",
      ],
      image: Q2_image,
    },
    {
      head: "Q3",
      data: ["Not Text"],
      image: Q2_image,
    },
    {
      head: "Q4",
      data: ["Not Text"],
      image: Q2_image,
    },
  ];

  return (
    <div className={cx("section")}>
      <div className={cx("limiter")}>
        <h2>ROAD MAP</h2>

        <div className={cx("table")}>
          <ul className={cx("head")}>
            {datas.map(({ head }, index) => (
              <li
                onClick={() => setActiveIndex(index)}
                className={cx({ active: activeIndex === index })}
                key={index}
              >
                {head}
              </li>
            ))}
          </ul>
          <ul className={cx("body")}>
            {datas.map(({ data, image }, index) => (
              <li key={index} className={cx({ active: index === activeIndex })}>
                <div>
                  <ul>
                    {data.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <img src={image} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx("background")} />
    </div>
  );
};

export default S04;
