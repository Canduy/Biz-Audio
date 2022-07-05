import { SendIcon } from "../Icon";
import Image from "../Image/Image";
import Input from "../Input/Input";
import "./GiftBox.scss";

function GiftBox() {
  return (
    <div className="gift-content-box">
      <div className="gift-content">
        <Image src="https://biboo.tecinus.vn/static/media/gift-img.adbc671a.png" />
        <div className="gift-info">
          <h2>Mã quà tặng</h2>
          <p>Mở khóa sách để nhận quà</p>
          <div className="gift-form">
            <Input placeholder="Nhập mã tặng quà" lg className="gift-input" />
            <SendIcon className="send-icon" />
          </div>
        </div>
      </div>
      <div className="gift-box">
        <Image src="https://biboo.tecinus.vn/static/media/gift-img-box.35915c92.png" />
      </div>
    </div>
  );
}

export default GiftBox;
