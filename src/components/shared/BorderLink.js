import classNames from 'classnames/bind';
import { UseUserModal } from '../../context/modalContext';

import styles from './BorderLink.module.scss';

const cx = classNames.bind(styles);

const BorderLink = ({ title, link }) => {
  const { setModalActive } = UseUserModal();

  let titleAfterContent = title;
  const firstString = titleAfterContent.split(' ');

  const onClick = event => {
    if (!link) {
      event.preventDefault();
      setModalActive(true);
    }
  };

  return (
    <a
      href={link === false ? '' : link}
      onClick={onClick}
      target={'_blank'}
      rel="noreferrer"
      className={cx(['link', firstString[0]])}
    >
      {title}
    </a>
  );
};

export default BorderLink;
