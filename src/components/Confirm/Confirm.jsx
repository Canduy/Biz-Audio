import { LeftIcon } from "../Icon";
import "./Confirm.scss";

function Confirm() {
  return (
    <div className="confirm">
      <button className="confirm-btn">
        <LeftIcon width="30" height="30" />
      </button>
      <div className="confirm-content">
        <div className="confirm-content__info">
          <span>Kết quả ôn luyện</span>
          <div className="info-img">
            <img
              src="https://biboo.tecinus.vn/static/media/confirm.9039e63c.png"
              alt=""
            />
          </div>
          <ul className="info-list">
            <li>
              <p>Tổng số câu:</p>
              <p>10 câu</p>
            </li>
            <li>
              <p>Câu đúng:</p>
              <p>6 câu</p>
            </li>
          </ul>
        </div>
        <div className="confirm-content__btn">
          <button>Làm lại bài</button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
