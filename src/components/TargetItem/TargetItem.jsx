import classNames from "classnames/bind";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";

import styles from "./TargetItem.module.scss";
const cx = classNames.bind(styles);

function TargetItem({ num, text, value }) {
  return (
    <>
      <div className={cx("target-item")}>
        <CircularProgressbarWithChildren
          minValue={0}
          maxValue={100}
          value={value}
          strokeWidth={6}
          styles={buildStyles({
            textColor: "#262338",
            textSize: "18px",
            pathColor: "#874bdd",
            trailColor: "#eee5fe",
          })}
        >
          <p className={cx("target-item__num")}>{num}</p>
          <span className={cx("target-item__text")}>
            Số trang sách <p>đã đọc hôm nay</p>
          </span>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}

TargetItem.propTypes = {
  num: PropTypes.string,
  value: PropTypes.number,
};

TargetItem.defaultProps = {
  num: "15/30",
  value: 50,
};
export default TargetItem;
