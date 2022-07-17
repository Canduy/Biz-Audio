import "./App.css";
import Confirm from "./components/Confirm/Confirm";
import Image from "./components/Image/Image";
import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Rating from "./components/Rating/Rating";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import Audio from "./pages/Audioo/Audio";
import Register from "./pages/Register/Register";
import PDF from "./pages/PDF/PDF";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/register" element={<Register />} />
          <Route path="/topic" element={<Topic />} />
        </Routes>
      </BrowserRouter> */}
      {/* <SidebarItem
        topic="Kinh tế và tài chính"
        title="Đàn ông sao hỏa đàn bà sao"
        author="Adama Natsuki "
        icon={<Rating value="5" text="(212)" />}
      >
        <Image src="https://file.mentor.vn/files/books/file-1634875714424.jpg" />
      </SidebarItem> */}
      <PDF />
    </div>
  );
}

export default App;
