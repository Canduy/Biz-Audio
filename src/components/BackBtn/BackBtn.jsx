import classNames from "classnames/bind";
import styles from "./BackBtn.module.scss";
import { Link } from "react-router-dom";
import { LeftIcon } from "../Icon";

const cx = classNames.bind(styles);
function BackBtn({ to, label }) {
  return (
    <div className={cx("back")}>
      <a className={cx("back-text")}>
        <LeftIcon className={cx("back-icon")} />
        {label}
      </a>
    </div>
  );
}

export default BackBtn;
