import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import ListPage from "./pages/ListPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./styles/global.scss";
import api from "./api";
import backgroundImg from "./assets/images/Vector 3.png";

function App() {
  return (
    <>
      <img style={{ position: "absolute", zIndex: "99" }} src={backgroundImg} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
