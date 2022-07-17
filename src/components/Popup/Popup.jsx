import React from "react";
import { ChatIcon, PlusIcon, ShareIcon } from "../Icon";

function Popup() {
  return (
    <ul className="popup-list">
      <li className="popup-item">
        <a href="#" className="popup-link">
          <PlusIcon width="30" height="30" />
          <span>Thêm vào thư viện</span>
        </a>
      </li>
      <li className="popup-item">
        <a href="#" className="popup-link">
          <ChatIcon width="30" height="30" />
          <span>Viết đánh giá</span>
        </a>
      </li>
      <li className="popup-item">
        <a href="#" className="popup-link">
          <ShareIcon width="30" height="30" />
          <span>Chia sẻ</span>
        </a>
      </li>
    </ul>
  );
}

export default Popup;
