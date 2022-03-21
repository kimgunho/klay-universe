import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

import OpeaSea from '../../assets/images/shared/OpeaSea.svg';
import Twitter from '../../assets/images/shared/Twitter.svg';
import GitBook from '../../assets/images/shared/gitbook.svg';
import Discord from '../../assets/images/shared/Discord.svg';

const cx = classNames.bind(styles);

const Footer = () => {
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
                <input type={'text'} placeholder={'Enter your email address.'} />
                <button>SUBMIT</button>
              </div>
            </div>
            <div className={cx('sns')}>
              <a href="mailto:info@klayuniverse.com">info@klayuniverse.com</a>
              <p>
                <span>
                  <a href="">Privacy Policy</a>
                </span>
                <span>|</span>
                <span>
                  <a href="">Terms of Service</a>
                </span>
              </p>
              <ul>
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
