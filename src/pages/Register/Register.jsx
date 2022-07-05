import classNames from "classnames/bind";
import { useState } from "react";

import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import { EyeIcon } from "../../components/Icon";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);

function Register() {
  const [valueEmail, setValueEmail] = useState("");
  const [valueName, setValueName] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valuePassAgain, setValuePassAgain] = useState("");

  const [hidePass, setHidePass] = useState(false);
  const [hidePassAgain, setHidePassAgain] = useState(false);

  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [showErrorEmail, setShowErrorEmail] = useState(false);

  const [errorMesageName, setErrorMessageName] = useState("");
  const [showErrorName, setShowErrorName] = useState(false);

  const [errorMesagePass, setErrorMessagePass] = useState("");
  const [showErrorPass, setShowErrorPass] = useState(false);

  const [errorMesagePassAgain, setErrorMessagePassAgain] = useState("");
  const [showErrorPassAgain, setShowErrorPassAgain] = useState(false);

  const emaiRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const handleBlurEmail = () => {
    if (valueEmail === "") {
      setShowErrorEmail(true);
      setErrorMessageEmail("*Vui lòng điền đầy đủ thông tin");
    } else if (emaiRegex.test(valueEmail)) {
      setShowErrorEmail(false);
      setErrorMessageEmail("");
    } else {
      setErrorMessageEmail("*Email không đúng định dạng");
    }
  };

  const handleBlurName = () => {
    if (valueName === "") {
      setShowErrorName(true);
      setErrorMessageName("*Vui lòng điền đầy đủ thông tin");
    } else {
      setShowErrorName(false);
      setShowErrorName("");
    }
  };

  const handleBlurPass = () => {
    if (valuePass === "") {
      setShowErrorPass(true);
      setErrorMessagePass("*Vui lòng điền đầy đủ thông tin");
    } else if (valuePass.length < 6) {
      setErrorMessagePass("*Mật khẩu từ 6 đến 15 kí tự");
    } else {
      setShowErrorPass(false);
      setErrorMessagePass("");
    }
  };

  const handleBlurPassAgain = () => {
    if (valuePassAgain === "") {
      setShowErrorPassAgain(true);
      setErrorMessagePassAgain("*Vui lòng điền đầy đủ thông tin");
    } else if (valuePassAgain === valuePass) {
      setShowErrorPassAgain(false);
      setErrorMessagePassAgain("");
    } else {
      setErrorMessagePassAgain("*Mật khẩu không trùng khớp");
    }
  };

  const handleRegister = () => {
    if (
      valueEmail === "" &&
      valueName === "" &&
      valuePass === "" &&
      valuePassAgain === ""
    ) {
      setShowErrorEmail(true);
      setErrorMessageEmail("*Vui lòng điền đầy đủ thông tin");
      setShowErrorName(true);
      setErrorMessageName("*Vui lòng điền đầy đủ thông tin");
      setShowErrorPass(true);
      setErrorMessagePass("*Vui lòng điền đầy đủ thông tin");
      setShowErrorPassAgain(true);
      setErrorMessagePassAgain("*Vui lòng điền đầy đủ thông tin");
    }
  };
  return (
    <Wrapper>
      <div className={cx("register")}>
        <BackBtn
          // to="/auth"
          label="Quay lại"
        />
        <div className={cx("form-group")}>
          <Title>
            <h2 className={cx("title")}>Tạo tài khoản</h2>
          </Title>
          <div className={cx("register-input")}>
            <Input
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
              type="text"
              placeholder="Email của bạn"
              className={cx(
                showErrorEmail ? "border-error" : "register-input-email"
              )}
              onBlur={handleBlurEmail}
            />
          </div>
          {showErrorEmail && (
            <span className={cx("error-message")}>{errorMessageEmail}</span>
          )}
          <div className={cx("register-input")}>
            <Input
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
              type="text"
              placeholder="Họ và tên"
              className={cx(
                showErrorName ? "border-error" : "register-input-name"
              )}
              onBlur={handleBlurName}
            />
          </div>
          {showErrorName && (
            <span className={cx("error-message")}>{errorMesageName}</span>
          )}
          <div className={cx("register-input", "register-password")}>
            <Input
              value={valuePass}
              onChange={(e) => setValuePass(e.target.value)}
              type={hidePass ? "text" : "password"}
              placeholder="Mật khẩu"
              className={cx(
                showErrorPass ? "border-error" : "register-input-pass"
              )}
              onBlur={handleBlurPass}
            />
            <button
              type="button"
              className={cx(hidePass ? "hide" : "hidden-password")}
              onClick={() => setHidePass(!hidePass)}
            >
              <EyeIcon />
            </button>
          </div>
          {showErrorPass && (
            <span className={cx("error-message")}>{errorMesagePass}</span>
          )}
          <div className={cx("register-input", "register-password")}>
            <Input
              value={valuePassAgain}
              onChange={(e) => setValuePassAgain(e.target.value)}
              type={hidePassAgain ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              className={cx(
                showErrorPassAgain ? "border-error" : "register-input-passagain"
              )}
              onBlur={handleBlurPassAgain}
            />
            <button
              type="button"
              className={cx(hidePassAgain ? "hide" : "hidden-password")}
              onClick={() => setHidePassAgain(!hidePassAgain)}
            >
              <EyeIcon />
            </button>
          </div>
          {showErrorPassAgain && (
            <span className={cx("error-message")}>{errorMesagePassAgain}</span>
          )}
          <Button
            primary
            large
            className={cx("btn-register")}
            onClick={handleRegister}
          >
            TẠO TÀI KHOẢN
          </Button>
          <div className={cx("register-text")}>
            <span>
              Đã có tài khoản?
              <a
                // to="/auth"
                className={cx("text-color")}
              >
                Đăng nhập
              </a>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
