import { useState } from 'react';
import classNames from 'classnames/bind';
import AnimatedCursor from 'react-animated-cursor';
import { UserModalProvider } from './context/modalContext';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import S01 from './components/sections/S01';
import S02 from './components/sections/S02';
import S03 from './components/sections/S03';
import S04 from './components/sections/S04';
import S05 from './components/sections/S05';
import S06 from './components/sections/S06';
import S07 from './components/sections/S07';
import PageModal from './components/shared/PageModal';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
  const [componentTop, setComponentTop] = useState({});

  return (
    <UserModalProvider>
      <div className={cx('App')}>
        <AnimatedCursor color="49, 248, 171" />
        <Header scrollTops={componentTop} />
        <S01 setTop={setComponentTop} />
        <S02 setTop={setComponentTop} />
        <div className={cx('background')}>
          <S03 setTop={setComponentTop} />
          <S04 setTop={setComponentTop} />
          <S05 setTop={setComponentTop} />
        </div>
        <S06 setTop={setComponentTop} />
        <S07 setTop={setComponentTop} />
        <PageModal />
        <Footer />
      </div>
    </UserModalProvider>
  );
}

export default App;
