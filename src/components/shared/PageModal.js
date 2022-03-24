import classNames from 'classnames/bind';
import { RiCloseLine } from 'react-icons/ri';
import { UseUserModal } from '../../context/modalContext';

import styles from './PageModal.module.scss';

import icon from '../../assets/images/shared/popup_icon.png';

const cx = classNames.bind(styles);

const PageModal = () => {
  const { modalActive, setModalActive } = UseUserModal();

  return (
    <div className={cx(['container', { active: modalActive }])}>
      <button onClick={() => setModalActive(false)}>
        <RiCloseLine />
      </button>
      <img src={icon} alt="" />
      <p>we’re getting ready.</p>
    </div>
  );
};

export default PageModal;
