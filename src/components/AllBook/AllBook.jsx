import "./AllBook.scss";

function AllBook() {
  const listBook = [
    {
      id: 1,
      img: "https://file.mentor.vn/files/books/file-1656303012957.png",
      title: "Nguời giàu có nhất thành Babylon",
      author: "",
    },
    {
      id: 2,
      img: "https://file.mentor.vn/files/books/file-1639473570436.jpg",
      title: "Con đường lập thân",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 3,
      img: "https://file.mentor.vn/files/books/file-1639470478470.png",
      title: "Chấp nhận cuộc đời - tìm hiểu ý nghĩa cuộc sống của bạn",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 4,
      img: "https://file.mentor.vn/files/books/file-1639464974946.png",
      title: "Nghệ thuật nói trước công chúng",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 5,
      img: "https://file.mentor.vn/files/books/file-1639470478470.png",
      title: "Chấp nhận cuộc đời - tìm hiểu ý nghĩa cuộc sống của bạn",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 6,
      img: "https://file.mentor.vn/files/books/file-1639464974946.png",
      title: "Nghệ thuật nói trước công chúng",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 7,
      img: "https://file.mentor.vn/files/books/file-1639470478470.png",
      title: "Chấp nhận cuộc đời - tìm hiểu ý nghĩa cuộc sống của bạn",
      author: "Nguyễn Hiến Lê",
    },
    {
      id: 8,
      img: "https://file.mentor.vn/files/books/file-1639464974946.png",
      title: "Nghệ thuật nói trước công chúng",
      author: "Nguyễn Hiến Lê",
    },
  ];
  return (
    <div className="category-book__all">
      {listBook.map((item, index) => (
        <div className="book-item" key={index}>
          <div className="book-item__img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="book-item__content">
            <span>{item.title}</span>
            <p>{item.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBook;
