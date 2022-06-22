import classNames from "classnames/bind";
import Title from "../Title/Title";
import styles from "./Wrapper.module.scss";
const cx = classNames.bind(styles);
function Wrapper({ children }) {
  return (
    <div className={cx("container")}>
      <div className={cx("background")}></div>
      <div className={cx("inner")}>
        <Title>
          <span>Hàng ngàn cuốn sách</span>
          <p>trong tầm tay</p>
        </Title>
      </div>
      <div className={cx("wrapper")}>{children}</div>
    </div>
  );
}

export default Wrapper;
