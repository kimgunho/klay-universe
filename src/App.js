import classNames from 'classnames/bind';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import S01 from './components/sections/S01';
import S02 from './components/sections/S02';
import S03 from './components/sections/S03';
import S04 from './components/sections/S04';
import S05 from './components/sections/S05';
import S06 from './components/sections/S06';
import S07 from './components/sections/S07';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('App')}>
      <div className={cx('cursor')} />
      <Header />
      <S01 />
      <S02 />
      <div className={cx('background')}>
        <S03 />
        <S04 />
        <S05 />
      </div>
      <S06 />
      <S07 />
      <Footer />
    </div>
  );
}

export default App;
