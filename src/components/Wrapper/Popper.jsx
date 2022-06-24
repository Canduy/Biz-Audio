import classNames from "classnames/bind";
import { Children } from "react";
import Title from "../Title/Title";
import styles from "./Wrapper.module.scss";
const cx = classNames.bind(styles);

function Popper({ children }) {
  return (
    <div className={cx("grid")}>
      <div className={cx("grid-inner")}>
        <Title className={cx("title")}>
          <h1>Chọn chủ đề</h1>
          <span>
            <h2>Hãy lựa chọn ít nhất 03 chủ đề mà bạn</h2>
            <h2>quan tâm</h2>
          </span>
        </Title>
        <div className={cx("grid-img")}>
          <img src="/topic_bg.png" alt="" />
        </div>
      </div>
      <div className={cx("grid-wrapper")}>{children}</div>
    </div>
  );
}

export default Popper;
