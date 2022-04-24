import { useRef, useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S04.module.scss';

import Q2_image from '../../assets/images/s04/q2_image.png';

const cx = classNames.bind(styles);

const S04 = ({ setTop }) => {
  const { t } = useTranslation();
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
        t('s04.q2_01'),
        t('s04.q2_02'),
        t('s04.q2_03'),
        t('s04.q2_04'),
        t('s04.q2_05'),
        t('s04.q2_06'),
        t('s04.q2_07'),
        t('s04.q2_08'),
      ],
      data_right: false,
      image: Q2_image,
    },
    {
      head: 'Q3',
      data: [
        t('s04.q3_01'),
        t('s04.q3_02'),
        t('s04.q3_03'),
        t('s04.q3_04'),
        t('s04.q3_05'),
        t('s04.q3_06'),
        t('s04.q3_07'),
        t('s04.q3_08'),
        t('s04.q3_09'),
        t('s04.q3_10'),
      ],
      data_right: [t('s04.q3_11'), t('s04.q3_12'), t('s04.q3_13')],
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
