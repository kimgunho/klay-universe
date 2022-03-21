import { useRef, useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './S04.module.scss';

import Q2_image from '../../assets/images/s04/q2_image.png';

const cx = classNames.bind(styles);

const S04 = ({ setTop }) => {
  const sectionRef = useRef();

  useEffect(() => {
    setTop(prev => ({
      ...prev,
      s04: sectionRef.current.offsetTop,
    }));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const datas = [
    {
      head: 'Q2',
      data: [
        'Minecraft supported',
        'All 5,000 UNIVERSE minted',
        'UNIVERSE rarity & distribution data separation completed',
        'UNIVERSE syncing to update UNIVERSE on the blockchain',
        'Open sourcemultiplayer server released',
        'Cross-platform playable (Xbox, PS, Switch, Phones, Tablets)',
        'COMMUNITY build-up',
        'Compensation plans for UNIVERSE holders',
      ],
      data_right: false,
      image: Q2_image,
    },
    {
      head: 'Q3',
      data: [
        'Payments dApp for in-game $KUT transaction',
        'Support for UNIVERSE owner created P2E systems',
        'Support for playable 3D NFT character partnerships',
        'Support for playing GAME on KLAY UNIVERSE',
        'Collaboration with Famous companies and Celebrities',
        'Famous brand UNIVERSE is open',
        'Full support&compensation to builders and creators',
        'Full support for creations such as animations and webtoons',
        '$KUT token Release',
        '$KUT token will list CEX & DEX',
      ],
      data_right: [
        'Based on $KUT voting system and compensation plans for $KUT token holders',
        'AIRDROPS $KUT for UNIVERSE holders',
        'Partnership and Collaboration with other KLAYTN projects',
      ],
      image: false,
    },
    {
      head: 'Q4',
      data: ['To be announced'],
      last: true,
      data_right: false,
      image: false,
    },
  ];

  return (
    <div className={cx('section')} ref={sectionRef}>
      <div className={cx('limiter')}>
        <h2>ROAD MAP</h2>

        <div className={cx('table')}>
          <ul className={cx('head')}>
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
          <ul className={cx('body')}>
            {datas.map(({ data, image, data_right, last }, index) => (
              <li key={index} className={cx({ active: index === activeIndex })}>
                <div>
                  <ul>
                    {data.map((item, index) => (
                      <li className={cx({ last: last })} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {image !== false ? <img src={image} alt="" /> : false}
                  {data_right !== false ? (
                    <ul>
                      {data_right.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    false
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx('background')} />
    </div>
  );
};

export default S04;
