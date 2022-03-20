import classNames from "classnames/bind";
import Header from "./components/shared/Header";
import S01 from "./components/sections/S01";
import S02 from "./components/sections/S02";
import S03 from "./components/sections/S03";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className="App">
      <Header />
      <S01 />
      <S02 />
      <div className={cx("background")}>
        <S03 />
      </div>
    </div>
  );
}

export default App;
