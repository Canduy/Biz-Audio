const data = [
  {
    id: 1,
    question: "Phong cách lãnh đạo Chỉ huy khi chịu áp lực sẽ: ",
    answers: [
      {
        text: "A. Thiếu kiên nhẫn và hay đòi hỏi",
        correct: true,
      },
      {
        text: "B.  Lấn lướt người khác bằng tính logic,trở nên cứng nhắc",
        correct: false,
      },
      {
        text: "C.  Thoái lui, tránh thể hiện quan điểm của bản thân",
        correct: false,
      },
      {
        text: "D.  Trở nên vô tổ chức,điên cuồng, thể hiện thái quá",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Lãnh đạo khiêm nhường sẽ hiệu quả hơn nếu: ",
    answers: [
      {
        text: "A. Thừa nhận cảm xúc của người khác, nhìn nhận yếu tố khác ngoài dữ liệu",
        correct: false,
      },
      {
        text: "B. Thể hiện sự tự tin, cảm nhận thực của bản thân",
        correct: false,
      },
      {
        text: "C. Quyết đoán,cấp bách,lên tiếng và khởi xướng thay đổi",
        correct: true,
      },
      {
        text: "D. Thừa nhận sai sót của người khác,đối diện với vấn đề",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Nếu bạn thuộc kiểu Di trong mô hình DiSC, thì bạn có phong cách lãnh đạo nào? ",
    answers: [
      {
        text: "A. Tiên phong",
        correct: true,
      },
      {
        text: "B. Chỉ huy",
        correct: false,
      },
      {
        text: "C. Hăng hái",
        correct: false,
      },
      {
        text: "D. Hòa nhập",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Lãnh đạo chủ yếu có phong cách nào thích môi trường quy củ, làm việc để đảm bảo sự ổn định? ",
    answers: [
      {
        text: "A. Hăng hái",
        correct: false,
      },
      {
        text: "B. Khiêm nhường",
        correct: true,
      },
      {
        text: "C. Kiên quyết",
        correct: false,
      },
      {
        text: "D. Chỉ huy",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Những phẩm chất nghiêng về tốc độ và sự thể hiện(Chỉ huy,Tiên phong, Hăng hái) rơi vào mặt phía nào của mô hình?",
    answers: [
      {
        text: "A. Đông",
        correct: false,
      },
      {
        text: "B. Tây",
        correct: false,
      },
      {
        text: "C. Nam",
        correct: false,
      },
      {
        text: "D. Bắc",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Mô hình DiSC lãnh đạo 8 phong cách được chia làm mấy trục?",
    answers: [
      {
        text: "A. 2",
        correct: true,
      },
      {
        text: "B. 3",
        correct: false,
      },
      {
        text: "C. 4",
        correct: false,
      },
      {
        text: "D. 5",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "'Cài đặt mặc định' được tác giả nói đến để chỉ điều gì? ",
    answers: [
      {
        text: "A. Những điểm yếu của bản thân",
        correct: false,
      },
      {
        text: "B. Những điểm mạnh của bản thân",
        correct: false,
      },
      {
        text: "C. Phong cách lãnh đạo chủ chốt của bản thân",
        correct: true,
      },
      {
        text: "D. Phong cách lãnh đạo bản thân còn thiếu",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "8 phong cách lãnh đạo dựa trên những phản ứng cảm xúc chính nào?",
    answers: [
      {
        text: "A. Thống trị, Ảnh hưởng, Kiên định và tận tâm",
        correct: true,
      },
      {
        text: "B. Thống trị, nhiệt huyết, kiên định và tận tâm",
        correct: false,
      },
      {
        text: "C. Chỉ huy,ảnh hưởng,kiên định và tận tâm",
        correct: false,
      },
      {
        text: "D. Chỉ huy,ảnh hưởng,kiên định và khiêm nhường",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Nền móng của DiSC xuất phát từ ai?",
    answers: [
      {
        text: "A. Peter F.Drucker",
        correct: false,
      },
      {
        text: "B. William Moulton Marston",
        correct: true,
      },
      {
        text: "C. Jeffrey Sugerman",
        correct: false,
      },
      {
        text: "D. Emma Wilhelm",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "DiSC là gì?",
    answers: [
      {
        text: "A. Công cụ đánh giá giúp cá nhân xác định phong cách hành vi",
        correct: true,
      },
      {
        text: "B. Công cụ đánh giá giúp cá nhân xác định điểm mạnh và điểm yếu",
        correct: false,
      },
      {
        text: "C. Công cụ đánh giá hiệu suất làm việc",
        correct: false,
      },
      {
        text: "D. Công cụ đánh giá giúp cá nhân xác định phong cách lãnh đạo",
        correct: false,
      },
    ],
  },
];
export const quizz = [
  {
    id: 1,
    title: "Câu 1",
  },
  {
    id: 2,
    title: "Câu 2",
  },
  {
    id: 3,
    title: "Câu 3",
  },
  {
    id: 4,
    title: "Câu 4",
  },
  {
    id: 5,
    title: "Câu 5",
  },
  {
    id: 6,
    title: "Câu 6",
  },
  {
    id: 7,
    title: "Câu 7",
  },
  {
    id: 8,
    title: "Câu 8",
  },
  {
    id: 9,
    title: "Câu 9",
  },
  {
    id: 10,
    title: "Câu 10",
  },
];

export default data;
