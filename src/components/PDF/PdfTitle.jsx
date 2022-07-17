import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { LeftIcon } from "../Icon";
import "./index.scss";
export default function PdfTitle() {
  return (
    <div className="pdf-container__title">
      <button className="pdf-btn-back">
        <LeftIcon width="40" height="40" />
      </button>
      <div className="pdf-title">
        <h2>
          Đế chế Alibaba: Bí mật quản trị nhân lực để tạo ra một đội quân bách
          chiến bách thắng
        </h2>
      </div>
      <div className="btn-audio">
        <FontAwesomeIcon icon={faCirclePlay} className="btn-audio__icon" />
        <button>Nghe audio</button>
      </div>
    </div>
  );
}
