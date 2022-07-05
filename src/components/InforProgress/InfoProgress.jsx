import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import "./InfoProgress.scss";

function InfoProgress({
  src = "https://file.mentor.vn/files/books/file-1637723174505.png",
  active,
  title,
  author,
  now,
  value,
  text,
}) {
  return (
    <div className="info">
      <div className="info-flex">
        <div className="info-img">
          <img src={src} alt="" />
        </div>
        <div className="info-content">
          {active && <span className="info-content__active">{active}</span>}
          {title && <p className="info-content__title">{title}</p>}
          {author && <span className="info-content__author">{author}</span>}
          <div className="info-progress">
            <ProgressBar now={now} />
            <span>{value}</span>
          </div>
          <div className="info-btn">
            <button>{text}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

InfoProgress.propTypes = {
  src: PropTypes.string,
  active: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  now: PropTypes.number,
  text: PropTypes.string,
};

export default InfoProgress;
