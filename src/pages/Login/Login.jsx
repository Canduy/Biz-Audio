import classNames from "classnames/bind";
import { useState } from "react";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import { EyeIcon } from "../../components/Icon";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPass, setShowErrorPass] = useState(false);
  const [errorMesageEmail, setErrorMessageEmail] = useState("");
  const [errorMesagePass, setErrorMessagePass] = useState("");
  const [hidePass, setHidePass] = useState(false);

  const emaiRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmailValue(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const handleBlurEmail = () => {
    if (emailValue === "") {
      setShowErrorEmail(true);
      setErrorMessageEmail("*Vui long nhap truong nay");
    } else if (emaiRegex.test(emailValue)) {
      setShowErrorEmail(false);
      setErrorMessageEmail("");
    } else {
      setErrorMessageEmail("*Email không đúng định dạng");
    }
  };

  const handleBlurPassword = () => {
    if (passwordValue === "") {
      setShowErrorPass(true);
      setErrorMessagePass("*Vui long nhap truong nay");
    } else if (passwordValue.length < 6) {
      // setShowErrorPass(false);
      setErrorMessagePass("*Mật khẩu từ 6 đến 15 kí tự");
    } else {
      setShowErrorPass(false);
      setErrorMessagePass("");
    }
  };

  const handleHidePass = () => {
    setHidePass(!hidePass);
  };

  return (
    <Wrapper>
      <div className={cx("login")}>
        <BackBtn
          // to="/auth"
          label="Quay lại"
        />
        <div className={cx("form-group")}>
          <form action="" className={cx("form")}>
            <Title>
              <div className={cx("title")}>
                <span>Đăng nhập</span>
                <p>tài khoản BIBOO</p>
              </div>
            </Title>
            <div className={cx("login-input")}>
              <Input
                type="text"
                value={emailValue}
                onChange={handleChangeEmail}
                className={cx(
                  showErrorEmail ? "border-error" : "login-input-email"
                )}
                placeholder="Email đăng nhập"
                onBlur={handleBlurEmail}
              />
            </div>
            {showErrorEmail && (
              <span className={cx("error-message")}>{errorMesageEmail}</span>
            )}
            <div className={cx("login-input", "login-password")}>
              <Input
                value={passwordValue}
                onChange={handleChangePassword}
                type={hidePass ? "text" : "password"}
                className={cx(
                  showErrorPass ? "border-error" : "login-input-password"
                )}
                placeholder="Mật khẩu"
                onBlur={handleBlurPassword}
              />

              <button
                type="button"
                className={cx(hidePass ? "hide" : "hidden-password")}
                onClick={handleHidePass}
              >
                <EyeIcon />
              </button>
            </div>
            {showErrorPass && (
              <span className={cx("error-message")}>{errorMesagePass}</span>
            )}
            <div className={cx("forgot")}>
              <Button
                // to="/forgot-password"
                forgot
                className={cx("forgot-password")}
              >
                <span>Quên mật khẩu?</span>
              </Button>
            </div>
            <Button large primary>
              ĐĂNG NHẬP
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
