import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

import OpeaSea from '../../assets/images/shared/OpeaSea.svg';
import Twitter from '../../assets/images/shared/Twitter.svg';
import GitBook from '../../assets/images/shared/gitbook.svg';
import Discord from '../../assets/images/shared/Discord.svg';
import Youtube from '../../assets/images/shared/youtube.svg';

const cx = classNames.bind(styles);

const Footer = () => {
  const form = useRef();
  const mailingRef = useRef();

  const sendEmail = e => {
    e.preventDefault();
    const value = mailingRef.current.value;
    /* eslint-disable */
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!reg_email.test(value)) {
      alert('메일양식이 아닙니다.');
      return false;
    }

    emailjs
      .sendForm('service_c1pz9pc', 'template_dfxj2vr', form.current, 'DANFrNV4TKqMu48p7')
      .then(alert('Thank you for join'), (mailingRef.current.value = ''), error => {
        console.log(error.text);
      });
  };

  return (
    <footer>
      <h2>
        NEW WORLDS ON
        <br />
        KLAYTN HAS ARRIVED.
      </h2>
      <div className={cx('info')}>
        <div className={cx('limiter')}>
          <div className={cx('inner')}>
            <div className={cx('join')}>
              <p>Join our community</p>
              <div className={cx('box')}>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type={'text'}
                    name="mailing"
                    ref={mailingRef}
                    placeholder={'Enter your email address.'}
                    className={cx('mailing')}
                  />
                  <input className={cx('button')} type="submit" value={'SUBMIT'} />
                </form>
              </div>
            </div>
            <div className={cx('sns')}>
              <a href="mailto:info@klayuniverse.com">info@klayuniverse.com</a>
              {/* <p>
                <span>
                  <a href="">Privacy Policy</a>
                </span>
                <span>|</span>
                <span>
                  <a href="">Terms of Service</a>
                </span>
              </p> */}
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCclk13SWkQ_b_kIPaDJWvxw"
                    target={'_blank'}
                  >
                    <img src={Youtube} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" target={'_blank'}>
                    <img src={OpeaSea} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/klayuniverse" target={'_blank'} rel="noreferrer">
                    <img src={Twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://klayuniverse.gitbook.io/whitepaper/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img src={GitBook} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/fveVY8YMhX"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img src={Discord} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className={cx('copyright')}>
            © 2022 Klay Universe. All Rights Reserved.
            <br />
            KLAYUNIVERSE is in not associated with, endorsed by, or a partner of Minecraft, Mojang,
            Microsoft or any related parties.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
