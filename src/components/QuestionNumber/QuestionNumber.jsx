import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { quizz } from "../../data/index";
import "./QuestionNumber.scss";

function QuestionNumber({
  questionNumber,
  setQuestionNumber,
  setSelectedAnswer,
  setStatus,
  status,
}) {
  let settings = {
    // dots: true,
    infinite: false,
    speed: 800,
    slidesToScroll: 4,
    slidesToShow: 5,
  };

  const handleClick = (id) => {
    setQuestionNumber(id);
    setSelectedAnswer(null);
    setStatus({
      ...status,
      showBtn: false,
      error: false,
      success: false,
    });
  };
  return (
    <div className="question-num">
      <Slider {...settings}>
        {quizz.map((item) => (
          <div
            key={item.id}
            className={`${
              questionNumber === item.id ? "slick-slide__active" : ""
            } `}
            onClick={() => handleClick(item.id)}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default QuestionNumber;
