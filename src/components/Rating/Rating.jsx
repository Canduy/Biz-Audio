import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Rating.module.scss";
const cx = classNames.bind(styles);
function Rating({ value, text }) {
  return (
    <div className={cx("rating")}>
      <FontAwesomeIcon
        className={cx("icon-star")}
        icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfStroke : faStar}
      />

      <FontAwesomeIcon
        className={cx("icon-star")}
        icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfStroke : faStar}
      />

      <FontAwesomeIcon
        className={cx("icon-star")}
        icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfStroke : faStar}
      />

      <FontAwesomeIcon
        className={cx("icon-star")}
        icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfStroke : faStar}
      />

      <FontAwesomeIcon
        className={cx("icon-star")}
        icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfStroke : faStar}
      />

      <span>{text && text}</span>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
};

Rating.defaultProps = {
  value: 5,
  text: "(121)",
};

export default Rating;
