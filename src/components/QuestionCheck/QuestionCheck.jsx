import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./QuestionCheck.scss";
import { useState } from "react";

function QuestionCheck({
  selectedAnswer,
  setQuestionNumber,
  question,
  setClassName,
  status,
  setStatus,
}) {
  const notify = () =>
    toast("Vui lòng chọn câu trả lời đúng!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSumit = () => {
    if (selectedAnswer === null) {
      notify();
      return;
    }
    if (selectedAnswer?.correct === true) {
      setClassName("answer-item true");
      setStatus({
        ...status,
        showBtn: true,
        success: true,
      });
    } else {
      setClassName("answer-item false");
      setStatus({
        ...status,
        error: true,
        showBtn: true,
        success: false,
      });
    }
  };

  const handlePrev = () => {
    setQuestionNumber((prev) => prev - 1);
  };

  const handleNext = () => {
    setQuestionNumber((prev) => prev + 1);
    setStatus({
      ...status,
      error: false,
      success: false,
      showBtn: false,
    });
  };
  return (
    <div className="question-check">
      <ToastContainer />
      <button className="btn-control btn-prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <button
        className={status.showBtn ? "btn-none" : "btn-check-answer"}
        onClick={handleSumit}
      >
        Kiểm tra
      </button>
      {status.success ? (
        <button
          className="btn-check-answer btn-check-true"
          onClick={handleSumit}
        >
          Đáp án chính xác
        </button>
      ) : status.error ? (
        <button
          className="btn-check-answer btn-check-fasle"
          onClick={handleSumit}
        >
          Đáp án sai
        </button>
      ) : (
        ""
      )}
      <button className="btn-control btn-next" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
}

export default QuestionCheck;
