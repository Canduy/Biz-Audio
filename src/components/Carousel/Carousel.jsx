import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

function Carousel() {
  const suggests = [
    {
      id: 1,
      img: "https://file.mentor.vn/files/books/file-1637120937775.jpg",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
    {
      id: 2,
      img: "https://file.mentor.vn/files/books/file-1637914244147.jpg",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
    {
      id: 3,
      img: "https://file.mentor.vn/files/books/file-1637723174505.png",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
    {
      id: 4,
      img: "https://file.mentor.vn/files/books/file-1634876111563.jpg",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
    {
      id: 5,
      img: "https://file.mentor.vn/files/books/file-1636511928435.png",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
    {
      id: 6,
      img: "https://file.mentor.vn/files/books/file-1637914244147.jpg",
      title: "Su that ve ung thu",
      author: "Dich gia: Tran Vi",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    // dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {suggests.map((item, index) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <span>{item.title}</span>
          <p>{item.author}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
