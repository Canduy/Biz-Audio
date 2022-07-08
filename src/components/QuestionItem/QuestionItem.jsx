import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./QuestionItem.scss";
function QuestionItem({
  data,
  questionNumber,
  selectedAnswer,
  setSelectedAnswer,
  question,
  setQuestion,
  className,
  setClassName,
}) {
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleAnswer = (answers) => {
    setSelectedAnswer(answers);
    setClassName("answer-item active");
  };
  // console.log(selectedAnswer);
  return (
    <>
      <div className="question-description">
        <p>{question?.question}</p>
      </div>
      <ul className="question-answers">
        {question?.answers.map((answers, index) => (
          <li
            className={selectedAnswer === answers ? className : "answer-item"}
            key={index}
            onClick={() => handleAnswer(answers)}
          >
            <span>{answers.text}</span>
            <div className="answer-checkbox">
              <div className="checkbox-icon">
                {selectedAnswer === answers ? (
                  <span>
                    <FontAwesomeIcon
                      className="check-default"
                      icon={faCheckCircle}
                    />
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="checkbox"></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuestionItem;
