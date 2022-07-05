import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Image.module.scss";

function Image({ src, alt, className, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: "https://file.mentor.vn/files/books/file-1637723174505.png",
};
export default Image;
