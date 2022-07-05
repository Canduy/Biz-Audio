import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./NavItems.module.scss";
const cx = classNames.bind(styles);

function NavItems({ children, icon, className }) {
  const classes = cx("navbar-list", {
    [className]: className,
  });
  const classTitle = cx("navbar-title", {
    [className]: className,
  });
  return (
    <>
      <a href="#" className={classes}>
        {icon && <div className={cx("navbar-icon")}>{icon}</div>}
        <div className={classTitle}>
          <span>{children}</span>
        </div>
      </a>
    </>
  );
}

NavItems.propTypes = {
  children: PropTypes.string,
};

NavItems.defaultProps = {
  children: "Home",
};

export default NavItems;
