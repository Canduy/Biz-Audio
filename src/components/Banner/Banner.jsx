import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Banner.scss";

function Banner() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <NextIcon />,
  };
  const slide = [
    {
      id: 1,
      img: "https://file.mentor.vn//files/categories/file-1634006052521.jpg",
    },
    {
      id: 2,
      img: "https://file.mentor.vn//files/categories/file-1634006032671.jpg",
    },
    {
      id: 3,
      img: "https://file.mentor.vn//files/categories/file-1634006052521.jpg",
    },
  ];
  return (
    <div className="home-banner__content">
      <Slider {...settings}>
        {slide.map((item) => (
          <div key={item.id}>
            <div className="home-banner-item">
              <img src={item.img} className="home-banner-img" alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
