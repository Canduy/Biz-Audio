import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  gray,
  marginTop,
  text,
  forgot,
  className,
  large,
  leftIcon,
  onClick,
  children,
  ...passProps
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    leftIcon,
    gray,
    forgot,
    marginTop,
    text,
    large,
    forgot,
  });
  const props = { onClick, ...passProps };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span className={cx("text-children")}>{children}</span>
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  gray: PropTypes.bool,
  marginTop: PropTypes.bool,
  text: PropTypes.bool,
  forgot: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  forgot: PropTypes.bool,
};

export default Button;
