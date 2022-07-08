import { useState } from "react";
import { LeftIcon } from "../../components/Icon";
import QuestionCheck from "../../components/QuestionCheck/QuestionCheck";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import QuestionNumber from "../../components/QuestionNumber/QuestionNumber";
import data from "../../data";
import "./Question.scss";

export default function Question() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  const [className, setClassName] = useState("answer-item");
  const [status, setStatus] = useState({
    success: false,
    error: false,
    showBtn: false,
  });

  return (
    <div className="question-container">
      <LeftIcon width="30" height="30" className="left-icon" />
      <div className="question-content">
        <div className="question-list">
          <QuestionNumber
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setSelectedAnswer={setSelectedAnswer}
            status={status}
            setStatus={setStatus}
          />
        </div>
        <div className="question-item">
          <QuestionItem
            data={data}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            question={question}
            setQuestion={setQuestion}
            className={className}
            setClassName={setClassName}
          />
        </div>
        <>
          <QuestionCheck
            selectedAnswer={selectedAnswer}
            setQuestionNumber={setQuestionNumber}
            question={question}
            setClassName={setClassName}
            status={status}
            setStatus={setStatus}
          />
        </>
      </div>
    </div>
  );
}
