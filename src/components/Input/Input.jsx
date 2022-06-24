import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";
const cx = classNames.bind(styles);
function Input({
  type = "text",
  placeholder,
  className,
  onChange,
  onBlur,
  value,
  lg,
}) {
  const classes = cx("input", {
    [className]: className,
    lg,
  });
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      className={classes}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  lg: PropTypes.bool,
};

export default Input;
