import classNames from "classnames/bind";
import styles from "./List.module.scss";
const cx = classNames.bind(styles);

function List({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default List;
