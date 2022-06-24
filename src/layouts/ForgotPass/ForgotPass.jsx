import classNames from "classnames/bind";

import styles from "./ForgotPass.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";
import BackBtn from "../../components/BackBtn/BackBtn";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Input from "../../components/Input/Input";
const cx = classNames.bind(styles);
function ForgotPass() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const emaiRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleBlur = () => {
    if (emailValue === "") {
      setShowMessage(true);
      setErrorMessage("*Vui lòng điền đầy đủ thông tin");
    } else if (emaiRegex.test(emailValue)) {
      setShowMessage(false);
      setErrorMessage("");
    } else {
      setErrorMessage("*Email không đúng định dạng");
    }
  };
  return (
    <Wrapper>
      <div className={cx("forgot-password")}>
        <BackBtn to="/login" label="Quay lại" />
        <div className={cx("form-forgot")}>
          <form action="">
            <Title>
              <div className={cx("title")}>
                <h2>Quên mật khẩu</h2>
                <div className={cx("title-body")}>
                  <span>Nhập vào email bạn đã đăng kí tài khoản</span>
                  <p>BIBOO để lấy lại mật khẩu</p>
                </div>
              </div>
            </Title>
            <div className={cx("forgot-input")}>
              <Input
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                type="text"
                placeholder="Email đã đăng kí"
                className={cx(showMessage ? "border-error" : "forgot-email")}
                onBlur={handleBlur}
              />
            </div>
            {showMessage && (
              <span className={cx("error-message")}>{errorMessage}</span>
            )}
            <Button primary className={cx("forgot-btn")}>
              TIẾP TỤC
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default ForgotPass;
