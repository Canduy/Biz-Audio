import "./App.css";
import Image from "./components/Image/Image";
import Rating from "./components/Rating/Rating";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

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
      <Home />
    </div>
  );
}

export default App;
