import classNames from "classnames/bind";
import styled from "styled-components";

import styles from "./BorderLink.module.scss";

const cx = classNames.bind(styles);

const BorderLink = ({ title, link }) => {
  const Link = styled.a`
    &:after {
      content: "${title}";
    }
  `;
  return (
    <Link href={link} target={"_blank"} rel="noreferrer" className={cx("link")}>
      {title}
    </Link>
  );
};

export default BorderLink;
