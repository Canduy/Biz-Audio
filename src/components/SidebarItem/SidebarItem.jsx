import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./SidebarItem.module.scss";
const cx = classNames.bind(styles);

function SidebarItem({ children, topic, title, author, icon }) {
  return (
    <div className={cx("sidebar-item")}>
      <div className={cx("sidebar-item__img")}>{children}</div>
      <div className={cx("sidebar-item__content")}>
        {topic && <span className={cx("topic")}>{topic}</span>}
        {title && <h2 className={cx("name")}>{title}</h2>}
        {author && <span className={cx("author")}>{author}</span>}
        {icon && <span className={cx("icon")}>{icon}</span>}
      </div>
    </div>
  );
}

SidebarItem.propTypes = {
  children: PropTypes.node,
  topic: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  icon: PropTypes.node,
};

export default SidebarItem;
